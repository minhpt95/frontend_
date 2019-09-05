@extends('layouts.home')


@section('header')
	<div class="header_in">
		<div class="title" style="padding: 5px 0 15px 0;">
            @include('common.menu')
			<span style="font-size: 28px;font-weight: bold">患者情報</span>
			<span style="font-size: 20px;font-weight: bold">No.{!! $patient->PATIENT_ID !!} {!! $patient->NAME !!}</span>
			<span style="font-size: 20px;font-weight: bold">{!! $patient->BIRTH_YEAR !!}年 {!! $patient->BIRTH_MONTH !!}月{!! $patient->BIRTH_DATE !!}日( {!! $patient->AGE !!}歳)</span>
		</div>
		<div class="menu">
			<ul style="width: 120px;">
                <li>
                    <a href="/home"><i class="fas fa-home"></i></a>
                </li>
				<li>
                    <a href="/visit"><i class="fas fa-search"></i></a>
                </li>
			</ul>
		</div>
	</div>
@endSection


@section('body')
	<div class="body_in">
        @if(Session::has('success'))
            <div class="alert alert_success">{!! Session::get('success') !!} </div>
            <?php session()->forget('success');  ?>
        @endif
        @if(Session::has('error'))
            <div class="alert alert_error" style="color:red;font-size:120%;text-decoration:underline;">
                <button class="close" data-dismiss="alert"></button><?php echo Session::get('error'); ?> </div>
            <?php session()->forget('error');  ?>
        @endif
        <div class="row" style="width: 100%; max-width: 1300px;margin: auto">
            <div class="col-md-12 col-lg-2"></div>
            <div class="col-md-12 col-lg-4">
    			<div class="caution">
    				<?= Form::open(array('url' => 'profile/'. $id, 'method'=>'put')); ?>
    					@csrf()
    					<p style="font-weight: bold">治療計画</p>
    					<textarea name="caution" placeholder="タップしてコメント入力※９６文字">{!! $patient->CAUTION !!}</textarea>
    					<p style="font-weight: bold">注意点</p>
    					<textarea name="note" placeholder="タップしてコメント入力※８０文字">{!! $patient->NOTE !!}</textarea>
    					<p style="font-weight: bold">受付記入欄</p>
    					<textarea name="desk_note" placeholder="タップしてコメント入力※５４文字" style="height: 100px;">{!! $patient->DESK_NOTE !!}</textarea>
    					<button type="submit">保　存</button>
    				<?= Form::close() ?>
    			</div>
            </div>
            <div class="col-md-12 col-lg-3">
    			<div class="tooth">

                    <!-- RIGHT_UPPER_TOOTH -->
                    @for($i = 1; $i <= 8; $i++)
                        <?php if($page['RIGHT_UPPER_TOOTH'.$i]):?>
                        <?php $path_on = "images/UR".$i."_on.png"; ?>
                        <img src="{{url($path_on)}}" ref="<?= $i ?>" class="navi_fuel_img UR<?= $i ?>">
                        <p class="navi_fuel_ex navi_fuel_ex<?= $i ?>" style="display: none">
                            <b>
                                <?= $page['RIGHT_UPPER_TOOTH'.$i][0]['CURE_DATE']?>  <?= $page['RIGHT_UPPER_TOOTH'.$i][0]['CURE_NAME']?>
                            </b>
                            <br /><input type="button" class="close-navi" id="close" name="close" value="×" >
                        </p>
                        <?php else:?>
                        <?php $path = "images/UR".$i.".png"; ?>
                        <img src="{{url($path)}}" class="UR<?=$i?>">
                        <?php endif;?>
                    @endfor
                    <!-- LEFT_UPPER_TOOTH1 -->
                    @for($i = 1; $i <= 8; $i++)
                    <?php if($page['LEFT_UPPER_TOOTH'.$i]):?>
                        <?php $path_on = "images/UL".$i."_on.png"; ?>
                        <img src="{{url($path_on)}}" ref="<?= $i ?>" class="navi_fuel_img UL<?= $i ?>">
                        <p class="navi_fuel_ex navi_fuel_ex<?= $i ?>" style="display: none">
                            <b>
                               <span> <?= $page['LEFT_UPPER_TOOTH'.$i][0]['CURE_DATE']?></span>  <?= $page['LEFT_UPPER_TOOTH'.$i][0]['CURE_NAME']?>
                            </b>
                            <br /><input type="button" class="close-navi" id="close" name="close" value="×" >
                        </p>
                    <?php else:?>
                        <?php $path = "images/UL".$i.".png"; ?>
                        <img src="{{url($path)}}" class="UL<?=$i?>">
                    <?php endif;?>
                    @endfor

    				<img src="{{url('images/ULA.png')}}" style="position: absolute;width: 25px;top: 55px;right: 139px;">
    				<img src="{{url('images/ULB.png')}}" style="position: absolute;width: 25px;top: 63px;right: 116px;">
    				<img src="{{url('images/ULC.png')}}" style="position: absolute;width: 25px;top: 80px;right: 101px;">
    				<img src="{{url('images/ULD.png')}}" style="position: absolute;width: 25px;top: 103px;right: 88px;">
    				<img src="{{url('images/ULE.png')}}" style="position: absolute;width: 25px;top: 123px;right: 81px;">

    				<img src="{{url('images/URA.png')}}" style="position: absolute;width: 25px;top: 55px;left: 139px;">
    				<img src="{{url('images/URB.png')}}" style="position: absolute;width: 25px;top: 63px;left: 116px;">
    				<img src="{{url('images/URC.png')}}" style="position: absolute;width: 25px;top: 80px;left: 101px;">
    				<img src="{{url('images/URD.png')}}" style="position: absolute;width: 25px;top: 103px;left: 88px;">
    				<img src="{{url('images/URE.png')}}" style="position: absolute;width: 25px;top: 123px;left: 81px;">

                    <!-- RIGHT_LOWER_TOOTH -->
                    @for($i = 1; $i <= 8; $i++)
                    <?php if($page['RIGHT_LOWER_TOOTH'.$i]):?>
                        <?php $path_on = "images/LR".$i."_on.png"; ?>
                        <img src="{{url($path_on)}}" ref="<?= $i ?>" class="navi_fuel_img LR<?= $i ?>">
                        <p class="navi_fuel_ex navi_fuel_ex<?= $i ?>" style="display: none">
                            <b>
                                <?= $page['RIGHT_LOWER_TOOTH'.$i][0]['CURE_DATE']?>  <?= $page['RIGHT_LOWER_TOOTH'.$i][0]['CURE_NAME']?>
                            </b>
                            <br /><input type="button" class="close-navi" id="close" name="close" value="×">
                        </p>
                    <?php else:?>
                        <?php $path = "images/LR".$i.".png"; ?>
                        <img src="{{url($path)}}" class="LR<?=$i?>">
                    <?php endif;?>
                    @endfor

                    <!-- LEFT_LOWER_TOOTH -->
                    @for($i = 1; $i <= 8; $i++)
                    <?php if($page['LEFT_LOWER_TOOTH'.$i]):?>
                        <?php $path_on = "images/LL".$i."_on.png"; ?>
                        <img src="{{url($path_on)}}" ref="<?= $i ?>" class="navi_fuel_img LL<?= $i ?>">
                        <p class="navi_fuel_ex navi_fuel_ex<?= $i ?>" style="display: none">
                            <b>
                                <?= $page['LEFT_LOWER_TOOTH'.$i][0]['CURE_DATE']?>  <?= $page['LEFT_LOWER_TOOTH'.$i][0]['CURE_NAME']?>
                            </b>
                            <br /><input type="button" class="close-navi" id="close" name="close" value="×">
                        </p>
                    <?php else:?>
                        <?php $path = "images/LL".$i.".png"; ?>
                        <img src="{{url($path)}}" class="LL<?=$i?>">
                    <?php endif;?>
                    @endfor

    				<img src="{{url('images/LLA.png')}}" style="position: absolute;width: 25px;bottom: 105px;right: 139px;">
    				<img src="{{url('images/LLB.png')}}" style="position: absolute;width: 25px;bottom: 117px;right: 116px;">
    				<img src="{{url('images/LLC.png')}}" style="position: absolute;width: 25px;bottom: 132px;right: 96px;">
    				<img src="{{url('images/LLD.png')}}" style="position: absolute;width: 25px;bottom: 152px;right: 80px;">
    				<img src="{{url('images/LLE.png')}}" style="position: absolute;width: 25px;bottom: 169px;right: 70px;">

    				<img src="{{url('images/LRA.png')}}" style="position: absolute;width: 25px;bottom: 105px;left: 139px;">
    				<img src="{{url('images/LRB.png')}}" style="position: absolute;width: 25px;bottom: 117px;left: 116px;">
    				<img src="{{url('images/LRC.png')}}" style="position: absolute;width: 25px;bottom: 132px;left: 96px;">
    				<img src="{{url('images/LRD.png')}}" style="position: absolute;width: 25px;bottom: 152px;left: 80px;">
    				<img src="{{url('images/LRE.png')}}" style="position: absolute;width: 25px;bottom: 169px;left: 70px;">

    				<div class="line_1"></div>
    				<div class="line_2"></div>
    			</div>
            </div>
		</div>
	</div>
    <form name="form1" method="post">
        @csrf
        <input type="hidden" name="patient_id" id="patient_id" value="{{$id}}" />
        <input type="hidden" name="waiting_patient_id" id="waiting_patient_id" value="{{ $waitPatientId }}" />
    </form>
@endSection

@section('js')
    <script>
        function goNext(nextlink){
            document.form1.action = "/" + nextlink;
            document.form1.submit();
        }
    </script>
@endsection
