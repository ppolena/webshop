package webshop.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import webshop.security.LoginService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final LoginService loginService;

    @PostMapping("/authentication")
    public boolean authentication(){
        return true;
    }

    @PostMapping("/login")
    public boolean login(HttpServletRequest request, HttpServletResponse response) {
        return loginService.login(request, response);
    }
}