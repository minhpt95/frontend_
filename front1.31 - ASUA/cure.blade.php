@extends('layouts.home')
@section('title',  __('Home'))

@section('header')
	<div class="header_in" style="background-color: #29dae8;">
		<div class="title" style="padding: 5px 0 15px 0;">
			<span  style="font-size: 25px;font-weight: bold">No.1</span>
			<span  style="font-size: 18px;font-weight: bold">??46年 6月16日</span>
			<span  style="font-size: 18px;font-weight: bold">48歳 男</span>
			<span  style="font-size: 18px;font-weight: bold">??????</span>
			
		</div>
		<div class="menu">
			<ul style="width: 240px;">
				<li>
                    <a href="/home"><i class="fas fa-home"></i></a>
				</li>
				<li>
                    <a href=""><img src="{{url('images/bnr_kyukan.png')}}"></a>
				</li>
				<li>
                    <a href=""><img src="{{url('images/bnr_waitmente.png')}}"></a>
				</li>
				<li>
                    <a href=""><img src="{{url('images/bnr_waitchiryo.png')}}"></a>
				</li>
			</ul>
		</div>
	</div>
@endSection


@section('body')
	<div class="body_in" style="margin-top: 150px;">
        @include('layouts.left-sidebar')
		<div class="menu">
			<div class="bound">
				<div class="item">
					<a href=""><img src="{{url('images/home_inputs.png')}}"></a>
				</div>
				<div class="item">
					<a href=""><img src="{{url('images/home_perio.png')}}"></a>
				</div>
				<div class="item">
					<a href=""><img src="{{url('images/home_plaque.png')}}"></a>
				</div>
			</div>
		</div>
	</div>
@endSection