@extends('layouts.home')
@section('title',  __('Wait'))

@section('header')
    <div class="header_in">
        <div class="title" style="padding: 5px 0 15px 0;">
            @include('common.home_menu')
            <span style="font-size: 28px;font-weight: bold">患者検索</span>
            <span style="font-size: 28px;font-weight: bold">受付</span>
            <span style="font-size: 28px;font-weight: bold">編集</span>
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

    <div class="body_in">
        <form name="form1" id="form1" method="post">
            <div class="row" style="width: 100%; max-width: 1300px;margin: auto">
                <div class="col-md-12 col-lg-6">
                     <div class="search_form">
                         {{ csrf_field() }}
                         <input type="hidden" name="patient_id" id="patient_id" value=""/>
                         <p style="font-size: 120%;font-weight: bold;color: #2b616d;">カルテNo.</p>
                         @if(Session::has('clinical_no'))
                             <input type="number" name="clinical_no" min="0" value="{{ Session::get('clinical_no') }}">
                         @else
                             <input type="number" name="clinical_no" min="0" value="{{ old('clinical_no') }}">
                         @endif

                         <p style="font-size: 120%;font-weight: bold;color: #2b616d;">患者名</p>
                         @if(Session::has('patient_name'))
                             <input type="text" name="patient_name" value="{{ Session::get('patient_name') }}">
                         @else
                             <input type="text" name="patient_name" value="{{ old('patient_name') }}">
                         @endif

                         <button onclick="searchPatient();return false;">検　索</button>

                         @if(Session::has('error1'))
                             <div
                                     style="color:red;font-size:120%;text-decoration:underline; margin-top: 20px">{{ Session::get('error1') }}</div>
                         @endif

                     </div>
                </div>

                <div class="col-md-12 col-lg-5">
                    <div class="table_search_form">
                        <div class="table">
                            <table style="width:100%">
                                <thead>
                                    <tr class="table_header">
                                        <th>No.</th>
                                        <th>氏名</th>
                                        <th>予約日時</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                    @if(Session::has('patientList'))
                                        <?php
                                        $patientList = Session::get('patientList');
                                        ?>
                                        @if(!empty($patientList))
                                            <tbody>
                                                <?php $i = 0; ?>
                                                @foreach($patientList as $patient)
                                                    <tr>
                                                        <td>{{ $patient['CLINICAL_NO'] }}</td>
                                                        <td>
                                                            {{ $patient['KANA'] }} <br>
                                                            <a href="javascript:void(0)"
                                                               onclick="goDetail('{{  $patient['NAME'] }}' , '{{ $patient['PATIENT_ID'] }}');return false">{{  $patient['NAME'] }}</a>
                                                        </td>
                                                        <td>
                                                            @if(isset($patient['NEXT_BOOK_DATE']) && $patient['NEXT_BOOK_DATE'] != 0)
                                                                {{ $patient['NEXT_BOOK_DATE'] }}
                                                                <br/>
                                                                {{ $patient['NEXT_BOOK_TIME'] }}
                                                            @elseif($patient['CURESHEET'] == 0)
                                                                急患
                                                            @endif
                                                        </td>
                                                        <td>{!!   ($patient['WAITING'] == 1) ? '受付済' : '<input type="button" name="btnRegist" id="btnRegist" class="btn btn-block btn-flat" onClick="btnRegister(\''. $patient['NAME'] .'\', \''. $patient['PATIENT_ID'].'\');return false;" value="受付">'   !!}</td>
                                                    </tr>
                                                    <?php $i++ ?>
                                                @endforeach
                                            </tbody>
                                        @endif
                                    @endif
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>



@endSection

@section('js')
    <script>
        function btnRegister(patient_name, patient_id) {
            let confirm_text = patient_name + "さんの受付登録してもよろしいでしょうか？";
            document.form1.patient_id.value = patient_id;
            if (window.confirm(confirm_text)) {
                document.form1.action = "/visit/register";
                document.form1.submit();
            }
            return false;
        }

        function searchPatient() {
            let clinical_no = document.form1.clinical_no.value;
            let patient_name = document.form1.patient_name.value;
            if (clinical_no === "" && patient_name === "") {
                alert("カルテ番号か患者名を入力してください。");
                return false;
            }
            document.form1.action = "/visit/search_patient";
            document.form1.submit();
        }

        function goNext(nextlink) {
            document.form1.action = "/" + nextlink;
            document.form1.submit();
        }

        function goDetail(patient_name, patient_id) {
            var confirm_text = patient_name + "さんの編集をしてもよろしいでしょうか？";
            document.form1.patient_id.value = patient_id;
            if (window.confirm(confirm_text)) {
                document.form1.action = "/edit_profile";
                document.form1.submit();
            }
            return false;
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
