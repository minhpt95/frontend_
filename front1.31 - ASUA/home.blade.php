@extends('layouts.home')
@section('title',  __('Home'))

@section('header')
	<div class="header_in" style="background-color: #29dae8;">
		<div class="title" style="padding: 5px 0 15px 0;">
			<span  style="font-size: 28px;font-weight: bold">AI communication for DENTAL</span>
			
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
		<div class="menu">
			<div class="bound">
				<div class="item">
					<a href=""><img src="{{url('images/home_sheet.png')}}"></a>
				</div>
				<div class="item">
					<a href="{{ url('/visit') }}"><img src="{{url('images/home_visit.png')}}"></a>
				</div>
				<div class="item">
					<a href="{!! url('/wait') !!}"><img src="{{url('images/home_wait.png')}}"></a>
				</div>
				<div class="item">
					<a href=""><img src="{{url('images/home_edit.png')}}"></a>
				</div>
				<div class="item">
					<a href=""><img src="{{url('images/home_monthly.png')}}"></a>
				</div>
				<div class="item">
					<a href=""><img src="{{url('images/home_setting.png')}}"></a>
				</div>
			</div>
		</div>
	</div>
@endSection