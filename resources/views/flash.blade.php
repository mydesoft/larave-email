@if($errors->any())
	<div class="alert alert-danger">
	@foreach($errors->all() as $error)
		<li>{{$error}}</li>
	@endforeach
	</div>
@endif

@if (session('success'))
    <div class = "alert alert-success" id ="message">
        <h6 class = "text-center">{{session('success')}}</h6>
    </div>
@endif

@if (session('danger'))
    <div class = "alert alert-danger">
        {{session('danger')}}
    </div>
@endif