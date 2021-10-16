<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use App\Http\Controllers\TimeController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/contact', [PageController::class, 'contact'])->name('contactus');
Route::post('/contact', [PageController::class, 'contactAction'])->name('contact');

Route::get('/mail', function(){
    $when = now()->addSeconds(10);
    $data = [
        'name' => 'Olumide'
    ];
    Mail::to('olumide@gmail.com')->send( new ContactMail($data));

//     $message = (new ContactMail($data))
//     ->onConnection('sync')
//     ->onQueue('emails');

// Mail::to('olumide@gmail.com')->queue($message);       
});

Route::get('/time', [TimeController::class, 'time']);
Route::get('/time/{time}', [TimeController::class, 'checkTime']);


	






