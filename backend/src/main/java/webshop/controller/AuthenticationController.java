package polenapeter.mercuryserver.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import polenapeter.mercuryserver.service.LoginService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final LoginService loginService;

    @PostMapping("/csrf")
    public void csrf(){}

    @PostMapping("/authentication")
    public boolean authentication(){
        return true;
    }

    @PostMapping("/login")
    public boolean login(HttpServletRequest request, HttpServletResponse response) {
        return loginService.login(request, response);
    }
}