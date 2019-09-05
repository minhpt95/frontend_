@extends('layouts.home')


@section('header')
    <div class="header_in">
        <div class="title">
            @include('common.menu')
            <span>待ち患者一覧</span>
            <span>No.{{ $patientInfo['CLINICAL_NO'] }} {{ $patientInfo['NAME'] }}</span>
            <span>
                {{ $patientInfo['ERA_NAME'] }}{{ $patientInfo['BIRTH_YEAR'] }}年 {{ $patientInfo['BIRTH_MONTH'] }}月{{
            $patientInfo['BIRTH_DATE'] }}日( {{ $patientInfo['NOW_AGE'] }}歳{{ $patientInfo['SEX'] == 2 ? '男' : '女' }})
            </span>
        </div>
        <div class="menu">
            <ul style="width: 120px;">
                <li>
                    <a href="/home"><i class="fas fa-home"></i></a>
                </li>
                <li>
                    <a href=""><i class="fas fa-search"></i></a>
                </li>
            </ul>
        </div>
    </div>
@endSection


@section('body')
    <form name="form1" method="post">
        {{ csrf_field() }}
        <input type="hidden" name="patient_id" value="{{ $patientId }}">
        <input type="hidden" name="waiting_patient_id" value="{{ $waitingPatientId }}">
        <input type="hidden" name="curesheet_id" value="">
    </form>
    <div class="body_in">

        @include('layouts.left-sidebar')
        <div class="bound">
            <div class="History">
                <p>治療履歴</p>
                @if(!empty($arrCureSheet))
                    @foreach($arrCureSheet as $item)
                        <div class="item">
                            <div class="H_card">
                                <div class="Line"></div>
                                <div class="before">
                                    <div class="head_card">
                                        <span style="margin-left: 10px;margin-top: 3px;float: left;">今回</span>
                                        @if($item['PERIO_FLAG'] == 1)
                                            <a href="javascript:void(0);"
                                               onClick="goPerio({{ $item['CURESHEET_ID'] }});return false;">
                                                <img src="/ja/images/icon_perio.png" height="20px">
                                            </a>
                                        @endif
                                        @if($item['EXPENSE_FLAG'] == 1)
                                            <a href="javascript:void(0);"
                                               onClick="goExpense({{ $item['CURESHEET_ID'] }});return false;">
                                                <img src="/ja/images/icon_expense.png" height="20px">
                                            </a>
                                        @endif

                                        <span style="margin-right: 10px;margin-top: 3px;float: right;"> [{{ $item['DOCTOR_NAME'] }}]</span>
                                        <span style="margin-right: 10px;margin-top: 3px;float: right;">（{{ $item['THIS_BOOK_DAY'] }}）</span>
                                        <span
                                            style="margin-right: 10px;margin-top: 3px;float: right;">{{ $item['THIS_BOOK_DATE'] }}</span>
                                    </div>
                                    @foreach($item['CURE_CONTENTS_NOW'] as $itemData)
                                        <div class="body_card">
                                            <div class="table_teeth">
                                                <table style="border: 1px solid #fff;">
                                                    <tr style="border: none">
                                                        <td width="100" style="border: 1px dotted #aaa;">
                                                            {{$itemData['RIGHT_UPPER_TOOTH8_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH7_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH6_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH5_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH4_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH3_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH2_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH1_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHE_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHD_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHC_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHB_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHA_DISPLAY'] }}
                                                        </td>
                                                        <td width="100" style="border: 1px dotted #aaa;">
                                                            {{$itemData['LEFT_UPPER_TOOTH1_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH2_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH3_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH4_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH5_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH6_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH7_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH8_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHA_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHB_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHC_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHD_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHE_DISPLAY'] }}
                                                        </td>
                                                    </tr>
                                                    <tr style="border: none">
                                                        <td width="100" style="border: 1px dotted #aaa;">
                                                            {{$itemData['RIGHT_LOWER_TOOTH8_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH7_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH6_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH5_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH4_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH3_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH2_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH1_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHE_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHD_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHC_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHB_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHA_DISPLAY'] }}
                                                        </td>
                                                        <td width="100" style="border: 1px dotted #aaa;">
                                                            {{$itemData['LEFT_LOWER_TOOTH1_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH2_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH3_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH4_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH5_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH6_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH7_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH8_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHA_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHB_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHC_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHD_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHE_DISPLAY'] }}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div class="table_teeth">
                                                <table style="border: 1px solid #fff;">
                                                    <tr style="border: none">
                                                        <td width="100"
                                                            style="border-bottom: none;">{{ $itemData['SUBCATEGORY_NAME1'] }}</td>
                                                        <td width="100"
                                                            style="border-bottom: none;">{{ $itemData['SUBCATEGORY_NAME2'] }}</td>
                                                    </tr>
                                                    <tr style="border: none">
                                                        <td width="100"
                                                            style="border-bottom: none;">{{ $itemData['SUBCATEGORY_NAME3'] }}</td>
                                                        <td width="100"
                                                            style="border-bottom: none;">{{ $itemData['SUBCATEGORY_NAME4'] }}</td>
                                                    </tr>
                                                </table>
                                            </div>

                                        </div>
                                    @endforeach
                                    <div class="conclude">
                                        メモ：{{ $item['NOTE'] }}
                                    </div>
                                </div>
                                <div class="after">
                                    <div class="head_card">
                                        <span style="margin-left: 10px;margin-top: 3px;float: left;">次回</span>
                                        @if($item['APOINT_WAIT'] == 1)
                                            連絡待ち
                                        @else
                                            <span
                                                style="margin-right: 10px;margin-top: 3px;float: right;">{{ $item['NEXT_BOOK_TIME'] }}</span>
                                            <span style="margin-right: 10px;margin-top: 3px;float: right;">（{{ $item['NEXT_BOOK_DAY'] }}）</span>
                                            <span
                                                style="margin-right: 10px;margin-top: 3px;float: right;">{{ $item['NEXT_BOOK_DATE'] }}</span>
                                        @endif
                                    </div>
                                    @foreach($item['CURE_CONTENTS_NEXT'] as $itemData)
                                        <div class="body_card">
                                            <div class="table_teeth">
                                                <table style="border: 1px solid #fff;">
                                                    <tr style="border: none">
                                                        <td width="100" style="border: 1px dotted #aaa;">
                                                            {{$itemData['RIGHT_UPPER_TOOTH8_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH7_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH6_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH5_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH4_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH3_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH2_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTH1_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHE_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHD_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHC_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHB_DISPLAY'] }}
                                                            {{$itemData['RIGHT_UPPER_TOOTHA_DISPLAY'] }}
                                                        </td>
                                                        <td width="100" style="border: 1px dotted #aaa;">
                                                            {{$itemData['LEFT_UPPER_TOOTH1_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH2_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH3_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH4_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH5_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH6_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH7_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTH8_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHA_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHB_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHC_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHD_DISPLAY'] }}
                                                            {{$itemData['LEFT_UPPER_TOOTHE_DISPLAY'] }}
                                                        </td>
                                                    </tr>
                                                    <tr style="border: none">
                                                        <td width="100" style="border: 1px dotted #aaa;">
                                                            {{$itemData['RIGHT_LOWER_TOOTH8_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH7_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH6_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH5_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH4_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH3_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH2_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTH1_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHE_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHD_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHC_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHB_DISPLAY'] }}
                                                            {{$itemData['RIGHT_LOWER_TOOTHA_DISPLAY'] }}
                                                        </td>
                                                        <td width="100" style="border: 1px dotted #aaa;">
                                                            {{$itemData['LEFT_LOWER_TOOTH1_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH2_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH3_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH4_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH5_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH6_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH7_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTH8_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHA_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHB_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHC_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHD_DISPLAY'] }}
                                                            {{$itemData['LEFT_LOWER_TOOTHE_DISPLAY'] }}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div class="table_teeth">
                                                <table style="border: 1px solid #fff;">
                                                    <tr style="border: none">
                                                        <td width="100"
                                                            style="border-bottom: none;">{{ $itemData['SUBCATEGORY_NAME1'] }}</td>
                                                        <td width="100"
                                                            style="border-bottom: none;">{{ $itemData['SUBCATEGORY_NAME2'] }}</td>
                                                    </tr>
                                                    <tr style="border: none">
                                                        <td width="100"
                                                            style="border-bottom: none;">{{ $itemData['SUBCATEGORY_NAME3'] }}</td>
                                                        <td width="100"
                                                            style="border-bottom: none;">{{ $itemData['SUBCATEGORY_NAME4'] }}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        @endforeach
                                        <!-- <div class="diagnose">
                                    something diagnose
                                </div> -->
                                        </div>
                                        <div class="conclude">
                                            メモ： {{ $item['NEXT_NOTE'] }}
                                        </div>
                                </div>
                            </div>
                            <div class="action">
                                <div class="edit">
                                    <a href="javascript:void(0)"
                                       onclick="goEdit({{$item['CURESHEET_ID']}});return false;"><img
                                            src="{{url('images/icon_edit.png')}}"></a>
                                </div>
                                <div class="delete">
                                    <a href="javascript:void(0)"
                                       onclick="deleteClick({{$item['CURESHEET_ID']}});return false;"><img
                                            src="{{url('images/icon_delete.png')}}"></a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
        {{--    <div class="Pagination">--}}
        {{--        <ul class="pagination">--}}
        {{--            <li class="page-item"><a class="page-link" href="#">Previous</a></li>--}}
        {{--            <li class="page-item"><a class="page-link" href="#">1</a></li>--}}
        {{--            <li class="page-item"><a class="page-link" href="#">2</a></li>--}}
        {{--            <li class="page-item"><a class="page-link" href="#">3</a></li>--}}
        {{--            <li class="page-item"><a class="page-link" href="#">Next</a></li>--}}
        {{--        </ul>--}}
        {{--    </div>--}}
    </div>
@endSection

@section('js')
    <script>
        function goNext(nextlink) {
            document.form1.action = "/" + nextlink;
            document.form1.submit();
        }

        function goEdit(curesheet_id) {
            document.form1.curesheet_id.value = curesheet_id;
            document.form1.action = "/history_inputs";
            document.form1.submit();
        }

        function deleteClick(curesheet_id) {
            document.form1.curesheet_id.value = curesheet_id;
            if (!window.confirm("削除してよろしいでしょうか？")) {
                return false;
            }
            document.form1.action = "/history/delete";
            document.form1.submit();
        }

        function goPerio(curesheet_id) {
            document.form1.curesheet_id.value = curesheet_id;
            document.form1.action = "/history_periodontal";
            document.form1.submit();
        }

        <!-- 自費カルテ処理 start -->
        function goExpense(curesheet_id) {
            document.form1.curesheet_id.value = curesheet_id;
            document.form1.action = "/expense";
            document.form1.submit();
        }

        <!-- 自費カルテ処理  end  -->
    </script>
@endsection
