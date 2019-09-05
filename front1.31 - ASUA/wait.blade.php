@extends('layouts.home')
@section('title',  __('Wait'))

@section('header')

    <div class="header_in">
        <div class="title" style="padding: 5px 0;">
            @include('common.home_menu')
            <span style="font-size: 28px;font-weight: bold">待ち患者一覧</span>
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
	<div class="body_in" style="width: 90%">
        <form name="form1" id="form1" action="" method="post">
            {{ csrf_field() }}
            <input type="hidden" name="_method" value=""/>

            <div class="table">
			<table style="width:100%">
                <thead>
                    <tr class="table_header">
                        <th>No.</th>
                        <th>氏名</th>
                        <th>部位</th>
                        <th>内容</th>
                        <th>予約</th>
                        <th>経過時間</th>
                        <th>状態</th>
                        <th>次回</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    @if(!empty($arrWaitingPatient))
                        @foreach($arrWaitingPatient as $patient)
                            <tr class="<?php
                            if ($patient['STATUS'] == 0) {
                                echo 'status1';
                            } elseif ($patient['STATUS'] == 1) {
                                echo 'status2';
                            } else {
                                echo 'status3';
                            }
                            ?>">
                                <td>{{ $patient['CLINICAL_NO'] }}</td>
                                <td>
                                    <a href="javascript:void(0)"
                                       onclick="goDetail('{{ $patient['PATIENT_ID'] }}', '{{ $patient['WAITING_PATIENT_ID'] }}' );return false;">
                                        {{ $patient['KANA'] }} <br>
                                        {{ $patient['NAME'] }}
                                    </a>
                                </td>
                                <td>
                                    <div class="table_teeth">
                                        <table style="border: 1px solid #fff;">
                                            <tr style="border: none">
                                                <td width="100"
                                                    style="border-bottom: none;">a</td>
                                                <td width="100"
                                                    style="border-bottom: none;">a</td>
                                            </tr>
                                            <tr style="border: none">
                                                <td width="100"
                                                    style="border-bottom: none;">a</td>
                                                <td width="100"
                                                    style="border-bottom: none;">a</td>
                                            </tr>
                                        </table>
                                    </div>
                                   <!--  @if($patient['EMERGENCY_FLAG'] == 0)
                                        <table class="table_teeth">
                                            <tr>
                                                <td id="right_upper1_1" class="td_teeth">
                                                    {{$patient['RIGHT_UPPER_TOOTH8_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTH7_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTH6_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTH5_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTH4_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTH3_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTH2_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTH1_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTHE_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTHD_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTHC_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTHB_DISPLAY']}}
                                                    {{$patient['RIGHT_UPPER_TOOTHA_DISPLAY']}}
                                                </td>
                                                <td id="left_upper1_1" class="td_teeth">
                                                    {{$patient['LEFT_UPPER_TOOTH1_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTH2_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTH3_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTH4_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTH5_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTH6_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTH7_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTH8_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTHA_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTHB_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTHC_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTHD_DISPLAY']}}
                                                    {{$patient['LEFT_UPPER_TOOTHE_DISPLAY']}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="right_lower1_1" class="td_teeth">
                                                    {{$patient['RIGHT_LOWER_TOOTH8_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTH7_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTH6_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTH5_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTH4_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTH3_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTH2_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTH1_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTHE_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTHD_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTHC_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTHB_DISPLAY']}}
                                                    {{$patient['RIGHT_LOWER_TOOTHA_DISPLAY']}}
                                                </td>
                                                <td id="right_lower1_1" class="td_teeth">
                                                    {{$patient['LEFT_LOWER_TOOTH1_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTH2_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTH3_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTH4_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTH5_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTH6_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTH7_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTH8_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTHA_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTHB_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTHC_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTHD_DISPLAY']}}
                                                    {{$patient['LEFT_LOWER_TOOTHE_DISPLAY']}}
                                                </td>
                                            </tr>
                                        </table>
                                    @endif -->
                                </td>
                                <td>
                                    @if($patient['EMERGENCY_FLAG'] == 0)
                                        {{ $patient['SUBCATEGORY_NAME'] }}
                                    @else
                                        【急患】
                                    @endif
                                </td>
                                <td>
                                    @if($patient['EMERGENCY_FLAG'] == 0)
                                        {{ $patient['NEXT_BOOK_TIME'] }}
                                    @else
                                        -
                                    @endif
                                </td>
                                <td>{{ $patient['WAITING_TIME'] }}</td>
                                <td>
                                    @if($patient['STATUS'] == 0)
                                        診察待
                                    @elseif($patient['STATUS'] == 1)
                                        診察中
                                    @else
                                        会計待
                                    @endif
                                </td>
                                <td>
                                    @if(isset($patient['APOINT_WAIT']) && $patient['APOINT_WAIT'] == 1)
                                        連絡待
                                    @else
                                        @if(isset($patient['NEXT_BOOK_DATE2']) && isset($patient['NEXT_BOOK_TIME2']))
                                            {{ substr($patient['NEXT_BOOK_DATE2'],0 ,5 ) }}
                                            <span style="font-size:83%;">{{ $patient['NEXT_BOOK_DAY'] }}}--></span>
                                            &nbsp;
                                            {{ $patient['NEXT_BOOK_TIME2'] }}
                                        @endif
                                    @endif
                                    <div style="text-align:center;">
                                        <a href="javascript:void(0)"
                                           onClick="goReserve('{{ $patient['PATIENT_ID'] }}', '{{ $patient['WAITING_PATIENT_ID'] }}' );return false;"><span
                                                style="font-weight:bold;">予約入力
                                    </span>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <a href="javascript:void(0)">
                                        <span data-toggle="modal" data-target="#changeStatus{{$patient['CLINICAL_NO']}}">...</span>
                                    </a>
                                </td>
                            </tr>

                            <div class="modal fade" id="changeStatus{{$patient['CLINICAL_NO']}}" role="dialog">
                                <div class="modal-dialog modal-sm">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="modal_item"
                                                 onclick="btn_nextClick(0,'{{ $patient['PATIENT_ID'] }}' , '{{ $patient['WAITING_PATIENT_ID'] }}' , this);return false;">
                                                診察待ち
                                            </div>
                                            <div class="modal_item"
                                                 onclick="btn_nextClick(1,'{{ $patient['PATIENT_ID'] }}' , '{{ $patient['WAITING_PATIENT_ID'] }}'  , this);return false;">
                                                診察中
                                            </div>
                                            <div class="modal_item"
                                                 onclick="btn_nextClick(2,'{{ $patient['PATIENT_ID'] }}' , '{{ $patient['WAITING_PATIENT_ID'] }}' , this);return false;">
                                                会計待ち
                                            </div>
                                            <div class="modal_item"
                                                 onclick="btn_nextClick(3,'{{ $patient['PATIENT_ID'] }}' , '{{ $patient['WAITING_PATIENT_ID'] }}' , this);return false;">
                                                終了
                                            </div>
                                            <div class="modal_item" style="color: red;"
                                                 onClick="btn_deleteClick('{{ $patient['PATIENT_ID'] }}', '{{ $patient['WAITING_PATIENT_ID'] }}' );return false;">
                                                削除
                                            </div>
                                            <!-- <ul>
                                                <li>診察待</li>
                                                <li>診察中</li>
                                                <li>会計待</li>
                                                <li>終了</li>
                                                <li>削除</li>
                                            </ul> -->

                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endif
                    </tbody>
                </table>
            </div>

            <input type="hidden" name="patient_id" value="">
            <input type="hidden" name="waiting_patient_id" value="">
            <input type="hidden" name="status" value="">
        </form>
    </div>
@endSection

@section('js')
    <script type="text/javascript">
        function goDetail(patient_id, waiting_patient_id) {
            document.form1.patient_id.value = patient_id;
            document.form1.waiting_patient_id.value = waiting_patient_id;
            document.form1.action = "/profile";
            document.form1.submit();
        }

        function goReserve(patient_id, waiting_patient_id) {
            document.form1.patient_id.value = patient_id;
            document.form1.waiting_patient_id.value = waiting_patient_id;
            document.form1.action = "/reserve";
            document.form1.submit();
        }

        // 削除ボタンクリック
        function btn_deleteClick(patient_id, waiting_patient_id) {
            if (!window.confirm("削除してよろしいでしょうか？")) {
                return false;
            }
            document.form1.patient_id.value = patient_id;
            document.form1._method.value = 'delete';
            document.form1.waiting_patient_id.value = waiting_patient_id;
            document.form1.action = "/wait/delete";
            document.form1.submit();
        }

        // 次へボタンクリック
        function btn_nextClick(status, patient_id, waiting_patient_id, btn_next) {
            document.form1.patient_id.value = patient_id;
            document.form1.waiting_patient_id.value = waiting_patient_id;

//    alert(document.form1.modal_patient_id.value)

            if (status === 0) {
//      if(window.confirm("診察中に変更してよろしいでしょうか？")){
                document.form1.status.value = 0;
                document.form1.action = "/wait/status_change";
                document.form1.submit();
//      }
            } else if (status === 1) {
                document.form1.status.value = 1;
//      if(window.confirm("会計待ちに変更してよろしいでしょうか？")){
                document.form1.action = "/wait/status_change";
                document.form1.submit();
//      }
            } else if (status === 2) {
                document.form1.status.value = 2;
//      if(window.confirm("会計待ちに変更してよろしいでしょうか？")){
                document.form1.action = "/wait/status_change";
                document.form1.submit();
//      }
            } else {
                document.form1.status.value = 9;
                if (window.confirm("本日の診療を完了してもよろしいでしょうか？")) {
                    // ボタンを連打させないようにする
                    // document.getElementById('btn_next3').style.color = "#dcdcdc";
                    btn_next.className = "disabled";
                    document.form1.action = "/wait/status_change";
                    document.form1.submit();
                }
            }
            return false;
        }

        function goNext(nextlink) {
            document.form1.action = "/" + nextlink;
            document.form1.submit();
        }

        $(function () {
            $('.zdo_drawer_button').click(function () {
                $(this).toggleClass('active');
                $('.zdo_drawer_bg').fadeToggle();
                $('nav').toggleClass('open');
            })
            $('.zdo_drawer_bg').click(function () {
                $(this).fadeOut();
                $('.zdo_drawer_button').removeClass('active');
                $('nav').removeClass('open');
            });
        })

        $(function () {
            $('.zdo_drawer_nav_wrapper li a').on('click', function () {
                $(this).toggleClass('linkup');
            });
        });

    </script>
@endsection
