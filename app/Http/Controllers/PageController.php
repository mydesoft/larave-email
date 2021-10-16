<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Carbon\carbon;

class PageController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function contact()
    {
        return view('contact');
    }

    public function contactAction(Request $request){

        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'country' => 'required',
            'subject' => 'required',
            'message' => 'required',
        ]);

        $when = now()->addMinutes(5);
        Mail::to('olumide@gmail.com')->later($when, new ContactMail($data));
    // Mail::to('olumide@gmail.com')->send(new ContactMail($data))->delay($when);

        return back()->with('success', 'Your message has been sent successfully');


    }
}
