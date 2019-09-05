@extends('layouts.home')


@section('header')
	<div class="header_in">
		<div class="title">
            @include('common.menu')
			<span>待ち患者一覧</span>
			<span>No.1 ??????</span>
			<span>??46年 6月16日( 48歳)</span>
		</div>
		<div class="menu">
			<ul style="width: 120px;">
				<li>
					<a href=""><i class="fas fa-home"></i></a>
				</li>
				<li>
					<a href="/home"><i class="fas fa-search"></i></a>
				</li>
			</ul>
		</div>
	</div>
@endSection


@section('body')
	<div class="body_in">

		<div class="bound" style="margin-left: 50px;">
			<div class="History" style="background-color: white">
				<div class="item">
					<div class="H_card" style="border: none">
						<div class="Line"></div>
						<div class="before">
							<div class="head_card">
								<span style="margin-left: 10px;margin-top: 3px;float: left;">次回治療内容</span>
							</div>
							<div class="body_card open_teeth" data-toggle="modal" data-target="#myModal">
								<div class="table_teeth">
									<table style="border: 1px solid #fff;background-color: #f2f2f2;">
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
									</table>
								</div>
								<div class="table_teeth ">
									<table style="border: none">
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
									</table>
								</div>
							</div>
							<div class="body_card open_teeth" data-toggle="modal" data-target="#myModal">
								<div class="table_teeth">
									<table style="border: 1px solid #fff;background-color: #f2f2f2;">
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
									</table>
								</div>
								<div class="table_teeth ">
									<table style="border: none">
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
									</table>
								</div>
							</div>
							<div class="body_card open_teeth" data-toggle="modal" data-target="#myModal">
								<div class="table_teeth">
									<table style="border: 1px solid #fff;background-color: #f2f2f2;">
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
									</table>
								</div>
								<div class="table_teeth ">
									<table style="border: none">
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
									</table>
								</div>
							</div>
							<div class="form-group" style="margin: 10px 0">
						    	<label for="exampleFormControlSelect1" style="float: left;margin: 5px 10px 0 0; width: 100px;">担当</label>
					    		<select class="form-control" id="exampleFormControlSelect1" style="width: 50%;float: left;">
					      			<option>1</option>
								    <option>2</option>
								    <option>3</option>
								    <option>4</option>
								    <option>5</option>
					    		</select>
					  		</div>

						</div>
						<div class="after">
							<div class="head_card">
								<span style="margin-left: 10px;margin-top: 3px;float: left;">今回治療内容 </span>
							</div>
							<div class="body_card open_teeth" data-toggle="modal" data-target="#myModal">
								<div class="table_teeth">
									<table style="border: 1px solid #fff;background-color: #f2f2f2;">
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
									</table>
								</div>
								<div class="table_teeth ">
									<table style="border: none">
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
									</table>
								</div>
							</div>
							<div class="body_card open_teeth" data-toggle="modal" data-target="#myModal">
								<div class="table_teeth">
									<table style="border: 1px solid #fff;background-color: #f2f2f2;">
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
									</table>
								</div>
								<div class="table_teeth ">
									<table style="border: none">
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
									</table>
								</div>
							</div>
							<div class="body_card open_teeth" data-toggle="modal" data-target="#myModal">
								<div class="table_teeth">
									<table style="border: 1px solid #fff;background-color: #f2f2f2;">
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
											<td width="100" style="border: 1px dotted #aaa;">12345678</td>
										</tr>
									</table>
								</div>
								<div class="table_teeth ">
									<table style="border: none">
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
										<tr style="border: none">
											<td width="100" style="border: none">12345678</td>
											<td width="100" style="border: none">12345678</td>
										</tr>
									</table>
								</div>
							</div>
							<div style="padding: 10px 0;overflow: hidden;">
								<label style="float: left;margin: 5px 10px 0 10px; width: 100px;">予約日:</label>
								 
								<input type="text" id="datepicker" style=
											"border: 1px solid #ccc;
											border-radius: 3px;
											width: 25%">
								<button style="
									border: none;
									border: 1px solid #78bbe6;
									color: #78bbe6;
									border-radius: 3px;
									background-color: white;
									width: 25%;">連絡待</button>
							</div>
							<div class="form-group" style="padding: 10px 0;overflow: hidden;margin: 0">
						    	<label for="exampleFormControlSelect1" style="float: left;margin: 5px 10px 0 10px; width: 100px;">予約時間</label>
					    		<select class="form-control" id="exampleFormControlSelect1" style="width: 25%;float: left;">
					      			<option>9:00</option>
					      			<option>10:00</option>
					      			<option>11:00</option>
					      			<option>13:00</option>
					      			<option>14:00</option>
					      			<option>15:00</option>
					      			<option>16:00</option>
					      			<option>17:00</option>
					      			<option>18:00</option>
					      			<option>19:00</option>
					    		</select>
					    		<select class="form-control" id="exampleFormControlSelect1" style="width: 25%;float: left;margin-left: 3px">
								    <option>0:00</option>
					      			<option>0:15</option>
								    <option>0:30</option>
								    <option>0:45</option>
					    		</select>
					  		</div>
							<div class="form-group" style="padding: 10px 0;overflow: hidden;margin: 0">
						    	<label for="exampleFormControlSelect1" style="float: left;margin: 5px 10px 0 10px; width: 100px;">治療時間</label>
					    		<select class="form-control" id="exampleFormControlSelect1" style="width: 50%;float: left;">
					      			<option>1</option>
								    <option>2</option>
								    <option>3</option>
								    <option>4</option>
								    <option>5</option>
					    		</select>
					  		</div>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="H_card" style="border: none">
						<div class="before">
							<textarea style="
								width: 100%;
								height: 100px;
								resize: none;
								padding-left: 5px;
								border-radius: 5px;
								border: 1px solid #ccc;
								background-color: #f2f2f2;" placeholder="タップしてコメント入力※９６文字">
								
							</textarea>
						</div>
						<div class="after">
							<textarea style="
								width: 100%;
								height: 100px;
								resize: none;
								padding-left: 5px;
								border-radius: 5px;
								border: 1px solid #ccc;
								background-color: #f2f2f2;" placeholder="タップしてコメント入力※９６文字">

							</textarea>
						</div>
					</div>
				</div>
					<div class="" style="width: 95%;margin: 10px 0;">
						<button style="
						margin: 10px auto;
						background-color: #f99f48;
						width:160px;
						height: 50px;
						display: flex;
						align-items: center;
						justify-content: center;
						border:none;
						padding: 10px 10px;
						border-radius: 5px;color: white;
						font-weight: bold;
						font-size: 2.0em;">保　存</button>
					</div>
			</div>
		</div>

        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-sm" style="max-width: 55%;">
                <div class="modal-content">
                    <div class="modal-body">
                    	<div class="modal_header">
                    		<div class="change_body">
                    			<img src="images/nyushi.png">
                    		</div>
                    	</div>
                    	<div class="modal_body">
                    		<div class="select_teeth">
                    			<img src="images/ue.png">
                    		</div>
                    		<div class="bound_teeth">
                    			<div class="line_3"></div>
                    			<div class="line_4"></div>
	                    		<div class="top_teeth">
									<div class="_tooth_">
										<div class="_tooth_in man">
											<div class="teeth_item">
												1
											</div>
											<div class="teeth_item">
												2
											</div>
											<div class="teeth_item">
												3
											</div>
											<div class="teeth_item">
												4
											</div>
											<div class="teeth_item">
												5
											</div>
											<div class="teeth_item">
												6
											</div>
											<div class="teeth_item">
												7
											</div>
											<div class="teeth_item">
												8
											</div>
										</div>
										<div class="_tooth_in chill hidden">
											<div class="teeth_item">
												A
											</div>
											<div class="teeth_item">
												B
											</div>
											<div class="teeth_item">
												C
											</div>
											<div class="teeth_item">
												D
											</div>
											<div class="teeth_item">
												E
											</div>
										</div>
									</div>
									<div class="_tooth_">
										<div class="_tooth_in man">
											<div class="teeth_item">
												1
											</div>
											<div class="teeth_item">
												2
											</div>
											<div class="teeth_item">
												3
											</div>
											<div class="teeth_item">
												4
											</div>
											<div class="teeth_item">
												5
											</div>
											<div class="teeth_item">
												6
											</div>
											<div class="teeth_item">
												7
											</div>
											<div class="teeth_item">
												8
											</div>
										</div>
										<div class="_tooth_in chill hidden">
											<div class="teeth_item">
												A
											</div>
											<div class="teeth_item">
												B
											</div>
											<div class="teeth_item">
												C
											</div>
											<div class="teeth_item">
												D
											</div>
											<div class="teeth_item">
												E
											</div>
										</div>
									</div>
	                    		</div>
	                    		<div class="bottom_teeth">
									<div class="_tooth_">
										<div class="_tooth_in man">
											<div class="teeth_item">
												1
											</div>
											<div class="teeth_item">
												2
											</div>
											<div class="teeth_item">
												3
											</div>
											<div class="teeth_item">
												4
											</div>
											<div class="teeth_item">
												5
											</div>
											<div class="teeth_item">
												6
											</div>
											<div class="teeth_item">
												7
											</div>
											<div class="teeth_item">
												8
											</div>
										</div>
										<div class="_tooth_in chill hidden">
											<div class="teeth_item">
												A
											</div>
											<div class="teeth_item">
												B
											</div>
											<div class="teeth_item">
												C
											</div>
											<div class="teeth_item">
												D
											</div>
											<div class="teeth_item">
												E
											</div>
										</div>
									</div>
									<div class="_tooth_">
										<div class="_tooth_in man">
											<div class="teeth_item">
												1
											</div>
											<div class="teeth_item">
												2
											</div>
											<div class="teeth_item">
												3
											</div>
											<div class="teeth_item">
												4
											</div>
											<div class="teeth_item">
												5
											</div>
											<div class="teeth_item">
												6
											</div>
											<div class="teeth_item">
												7
											</div>
											<div class="teeth_item">
												8
											</div>
										</div>
										<div class="_tooth_in chill hidden">
											<div class="teeth_item">
												A
											</div>
											<div class="teeth_item">
												B
											</div>
											<div class="teeth_item">
												C
											</div>
											<div class="teeth_item">
												D
											</div>
											<div class="teeth_item">
												E
											</div>
										</div>
									</div>
	                    		</div>
                    		</div>
                    		<div class="select_teeth">
                    			<img src="images/shita.png">
                    		</div>
                    	</div>
                    	<div class="modal_more">
                    		<div class="Add">
                    			治療内容 <i class="fas fa-plus-square"></i>
                    		</div>
				    		<select class="form-control" style="width: 25%;float: left;">
				      			<option>9:00</option>
				      			<option>10:00</option>
				      			<option>11:00</option>
				      			<option>13:00</option>
				      			<option>14:00</option>
				      			<option>15:00</option>
				      			<option>16:00</option>
				      			<option>17:00</option>
				      			<option>18:00</option>
				      			<option>19:00</option>
				    		</select>
				    		<select class="form-control" style="width: 25%;float: left;">
				      			<option>9:00</option>
				      			<option>10:00</option>
				      			<option>11:00</option>
				      			<option>13:00</option>
				      			<option>14:00</option>
				      			<option>15:00</option>
				      			<option>16:00</option>
				      			<option>17:00</option>
				      			<option>18:00</option>
				      			<option>19:00</option>
				    		</select>
                    	</div>
                    	<div class="modal_submit">
                    		<div class="select_teeth">
                    			<img src="images/selected.png">
                    		</div>
                    	</div>
                    </div>
                </div>
            </div>
        </div>
	</div>


		
@endSection