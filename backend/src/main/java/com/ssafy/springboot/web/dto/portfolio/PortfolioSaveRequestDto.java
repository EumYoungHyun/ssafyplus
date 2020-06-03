package com.ssafy.springboot.web.dto.portfolio;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.web.dto.portfolio.project.ProjectSaveRequestDto;
import com.ssafy.springboot.web.dto.portfolio.skill.SkillSaveRequestDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class PortfolioSaveRequestDto {

    private String user_email;

    private String title;
    private String name;
    private String birth;
    private String email;
    private String phone;
    private List<String> characters;
    private List<String> my_stacks;
    private List<SkillSaveRequestDto> skills;
    private List<ProjectSaveRequestDto> projects;

    @Builder
    public PortfolioSaveRequestDto(String user_email, String title, String name, String birth, String email, String phone,
                                   List<String> characters, List<String> my_stacks, List<SkillSaveRequestDto> skills, List<ProjectSaveRequestDto> projects) {
        this.user_email = user_email;
        this.title = title;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.characters = characters;
        this.my_stacks = my_stacks;
        this.skills = skills;
        this.projects = projects;
    }

    public Portfolio toEntity(User user) {
        return Portfolio.builder()
                .user(user)
                .title(title)
                .name(name)
                .birth(birth)
                .email(email)
                .phone(phone)
                .characters(characters)
                .my_stacks(my_stacks)
                .build();
    }

}