<?php

namespace App\Http\Controllers;
use App\Models\Exam;
use App\Repository\ExamRepository;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ExamController extends Controller
{
    public function __construct(ExamRepository $examRepository){

        $this->examRepository = $examRepository;
    }

    public function index()
    {
       $exams = $this->examRepository->allExams();

       if (!$exams->count() > 0) {
            return response()->json([
                'message' => 'No Exam Created Yet!',
            ], 200);
       }
       else{

           return response()->json([
               'data' => $exams,
           ], 200);
       }
    }

    
    public function store(Request $request)
    {
        $exam = $this->examRepository->createExam();
        return response()->json([
            'data' => $exam,
        ], 200);
      
    }
     
    public function show($id)
    {
        $exam = $this->examRepository->showExam($id);
        return response()->json([
            'data' => $exam,
        ], 302);
    }
    
    public function update($id)
    {
        $exam = $this->examRepository->updateExam($id);
        return response()->json([
            'data' => $exam
        ], 200);
    }

    public function destroy($id)
    {
        $this->examRepository->deleteExam($id);
        return response()->json([
            'message' => 'Record deleted successfully'
        ], 200);
    }


   
}
