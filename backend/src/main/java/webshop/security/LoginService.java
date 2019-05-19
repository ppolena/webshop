package polenapeter.mercuryserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.util.Base64;

import static org.springframework.security.web.context.HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY;

@Service
public class LoginService {

    @Autowired
    private AuthenticationManager authenticationManager;

    public UsernamePasswordAuthenticationToken getUsernamePasswordAuthenticationToken(String authorizationHeader) throws UnsupportedEncodingException {
        String base64Part = authorizationHeader.split(" ")[1];
        byte[] decodedBytes = Base64.getDecoder().decode(base64Part);
        String decodedAuthorization = new String(decodedBytes, "UTF-8");
        String username = decodedAuthorization.split(":",2)[0];
        String password = decodedAuthorization.split(":", 2)[1];

        return new UsernamePasswordAuthenticationToken(username, password);
    }

    public Authentication getAuthentication(String authorizationHeader) {
        Authentication authentication;
        try {
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                    getUsernamePasswordAuthenticationToken(authorizationHeader);
            authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        } catch (DisabledException de) {
            throw new DisabledException(de.getMessage());
        } catch (LockedException le) {
            throw new LockedException(le.getMessage());
        } catch (BadCredentialsException bce) {
            throw new BadCredentialsException(bce.getMessage());
        } catch (UnsupportedEncodingException uee) {
            throw new UnsupportedOperationException(uee.getMessage());
        }

        return authentication;
    }

    public boolean login(HttpServletRequest request, HttpServletResponse response) {
        String authorizationHeader = request.getHeader("authorization");
        Authentication authentication = getAuthentication(authorizationHeader);
        SecurityContext securityContext = SecurityContextHolder.getContext();
        securityContext.setAuthentication(authentication);
        HttpSession session = request.getSession(true);
        session.setAttribute(SPRING_SECURITY_CONTEXT_KEY, securityContext);
        response.setHeader("Access-Control-Allow-Origin", IpAddressService.angularAddress);
        response.setHeader("Access-Control-Allow-Credentials", "true");
        return true;
    }
}
