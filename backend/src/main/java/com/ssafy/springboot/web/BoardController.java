package com.ssafy.springboot.web;

import com.ssafy.springboot.service.BoardPartyService;
import com.ssafy.springboot.service.BoardService;
import com.ssafy.springboot.web.dto.board.BoardListResponseDto;
import com.ssafy.springboot.web.dto.board.BoardPartySaveRequestDto;
import com.ssafy.springboot.web.dto.board.BoardSaveRequestDto;
import com.ssafy.springboot.web.dto.board.BoardUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"2. Board"})
@RequestMapping("/api/board")
@RequiredArgsConstructor
@RestController
public class BoardController {

    private final BoardService boardService;
    private final BoardPartyService boardPartyService;

    @ApiOperation(value = "게시판 생성")
    @PostMapping("") // 게시글 업로드
    public ResponseEntity<?> save(@RequestBody BoardSaveRequestDto requestDto) {
        return boardService.save(requestDto);
    }


    @ApiOperation(value = "게시판 수정")
    @PutMapping("{board_id}") // 게시글 수정
    public void update(@PathVariable Long board_id, @RequestBody BoardUpdateRequestDto requestDto) {
        boardService.update(board_id, requestDto);
    }

    @ApiOperation(value = "게시판 삭제")
    @DeleteMapping("{board_id}")
    public void delete(@PathVariable Long board_id) {
        boardService.delete(board_id);
    }

    @ApiOperation(value = "게시판 가입")
    @PostMapping("/join/{board_id}")
    public void delete(@PathVariable Long board_id, @RequestBody BoardPartySaveRequestDto requestDto) {
        boardPartyService.update(board_id, requestDto);
    }

    @ApiOperation(value = "게시판 리스트", notes = "생성된 게시판의 리스트를 가져오기")
    @GetMapping("/list")
    public List<BoardListResponseDto> list() {
        return boardService.selectAll();
    }

    @ApiOperation(value = "type 이 free/public/private인 게시판 목록 조회")
    @GetMapping("/list/{type}")
    public List<BoardListResponseDto> findByType(@PathVariable String type) {
        return boardService.findByType(type);
    }

    @ApiOperation(value = "유저가 가입한 게시판 목록 조회")
    @GetMapping("/joinlist/{email:.+}/")
    public List<BoardListResponseDto> findByUser(@PathVariable String email) {
        return boardService.findByUser(email);
    }

    @ApiOperation(value = "비공개 게시판 중 가입자가 많은 순 목록 조회(10개)")
    @GetMapping("/top10")
    public List<BoardListResponseDto> top10() {
        return boardService.top10();
    }

    @ApiOperation(value = "게시글이 많은 게시판 top10")
    @GetMapping("/postCntTop10")
    public List<BoardListResponseDto> postCntTop10() {
        return boardService.postCntTop10();
    }

    @ApiOperation(value = "유저가 게시판에 가입했는지 확인")
    @GetMapping("isJoin/{email:.+}/{board_id}")
    public ResponseEntity<?> isJoin(@PathVariable String email, @PathVariable Long board_id) {

        System.out.println(email + " " + board_id);
        return boardService.isJoin(email, board_id);


    }
}