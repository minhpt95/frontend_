@extends('layouts.home')
@section('title',  __('Home'))

@section('header')
	<div class="header_in" style="background-color: #29dae8;">
		<div class="title" style="padding: 5px 0 15px 0;">
			<span  style="font-size: 28px;font-weight: bold">No.1</span>		
			<span  style="font-size: 28px;font-weight: bold">??????</span>
			
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
		<div class="bound_sheet">
			<div class="sheet_nav_button">
				<button><a href="{{ route('editsheetchild') }}">小児用</a></button>
			</div>
			
			@include('admin.component.nav_sheet')

			<div class="sheet_nav_button">
				<button>編集メイン</button>
			</div>

		</div>
		<div class="bound_sheet">

			@include('admin.component.edit_sheet_1')
			@include('admin.component.edit_sheet_2')
			@include('admin.component.edit_sheet_3')
			@include('admin.component.edit_sheet_4')
			@include('admin.component.edit_sheet_5')
			
			<div class="control">
				<div class="back button" id="backsheet">
					<a>≪前の設問に戻る</a>
				</div>
				<div class="next button" id="nextsheet">
					<a>次に進む≫</a>
				</div>
				<div class="submit button" id="submitsheet">
					<a>内容を変更する</a>
				</div>
			</div>
		</div>
		
	</div>
    <script src="{{asset('js/edit_sheet.js')}}"></script>
	<script type="text/javascript" src="">
		
	</script>
@endSection