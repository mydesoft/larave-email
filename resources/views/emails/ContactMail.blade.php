@component('mail::message')

    <p>Hello, you have a message from {{$data['name']}}.</p>
    <p>Check Details Below</p>


@component('mail::panel')
 <h4> Name : {{$data['name']}}</h4>
 {{-- <h4> Email : {{$data['email']}}</h4>
 <h4> Phone : {{$data['phone']}}</h4>
 <h4> Country : {{$data['country']}}</h4>
 <h4> Subject : {{$data['subject']}}</h4>
 <h4> Message : {{$data['message']}}</h4>
@endcomponent --}}


Thanks,<br>
{{ config('Reserved Movers') }}
@endcomponent
