<?php

namespace App\Repository;

use App\Models\Exam;

class ExamRepository
{
    public function allExams(){

        return Exam::orderBy('created_at', 'asc')->get();
        
    }
    public function createExam(){

        $data = $this->validatedExamRequests();

        $exam = new Exam();
        $exam->total_subject = $data['total_subject'];
        $exam->questions_per_subject = $data['questions_per_subject'];
        $exam->exam_instruction = $data['exam_instruction'];
        $exam->exam_date = $data['exam_date'];
        $exam->student_delay = $data['student_delay'];
        $exam->randomize_questions = $data['randomize_questions'];
        $exam->randomize_answer = $data['randomize_answer'];
        $exam->exam_end_instruction = $data['exam_end_instruction'];
        $exam->year = $data['year'];
        $exam->save();
        return $exam;
    }

    public function showExam($examId){

        return Exam::findOrFail($examId);   
    }


    public function updateExam($examId){

        $data = $this->validatedExamRequests();
        $exam = Exam::findOrFail($examId);
        $exam->update($data);
        return $exam;
    }

    public function deleteExam($examId){

        $exam = Exam::findOrFail($examId);
        $exam->delete();
    }

    public function validatedExamRequests(){
        return $examRequests = request()->validate([
            'total_subject' => 'required',
            'questions_per_subject' => 'required',
            'exam_instruction' =>  'required',
            'exam_date' => 'required',
            'student_delay' => 'required',
            'randomize_questions' => 'required',
            'randomize_answer' => 'required',
            'exam_end_instruction' => 'required',
            'year' => 'required',
        ]);
    }
}
