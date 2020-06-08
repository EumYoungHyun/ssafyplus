package com.ssafy.springboot.domain.BreakingError;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.BaseTimeEntity;
import com.ssafy.springboot.domain.user.User;
import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Answers extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answer_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "error_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "error_id")
    private Errors error;

    @Column( nullable = false)
    private Long parent;

    @Column(length = 500, nullable = false)
    private  String title;

    @Column(columnDefinition = "TEXT", nullable = false) // 타입을 "TEXT"로 변경
    private String content;


    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id")
    private User user;


    private Long like_cnt;
    private Long answer_cnt;

    @Builder //해당 클래스의 빌더 패턴 클래스를 생성
    public Answers(Errors error, Long parent, String title, String content, User user) {
        this.error = error;
        this.title = title;
        this.content = content;
        this.user = user;
        this.like_cnt = Long.valueOf(0);
        this.answer_cnt = Long.valueOf(0);
        this.parent = parent;

    }

    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
