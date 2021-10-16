<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExamController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




// Route::group(['middleware' => ['auth:api']],  function () {

    Route::get('/exams', [ExamController::class, 'index']);

    Route::post('/exams',[ExamController::class, 'store']);

    Route::get('/exams/{exam}', [ExamController::class, 'show']);

    Route::patch('/exams/{exam}', [ExamController::class, 'update']);

    Route::delete('/exams/{exam}', [ExamController::class, 'destroy']);  
// });







