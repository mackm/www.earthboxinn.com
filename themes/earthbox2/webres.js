function EmbedBookingRequest_OnLoad()
	{
	$(function() {
		$("#date_from").datepicker({dateFormat:'mm-dd-yy',beforeShowDay: checkDate});
		});
								    
	}

var WinPointer;
function orrs_popup_window(window_name,url,width,height,xpos,ypos)
    {
    if (!window_name)
        window_name = 'NewWindow';

    if (!width)
        width=300;

    if (!height)
        height=300;

    if (!xpos)
        xpos=20;

    if (!ypos)
        ypos=20;

    if (WinPointer != null)
        {
        WinPointer.close();
        WinPointer = null;
        }

    var winStats = 'width='+ width +',height='+ height +',scrollbars=yes,menubar=yes,status=yes,menubar=yes,toolbar=no,location=no,resizable=yes';

    if (xpos > 0)
        {
        winStats += ",left=" + xpos;
        }
    if (ypos > 0)
        {
        winStats += ",top=" + ypos;
        }

    WinPointer = window.open(url,'window_name',winStats);
    return false;
    }


//function EmbedBookingRequest(hotel_id,max_adults,max_children)
function EmbedBookingRequest_ReturnHTML()
	{
	document.writeln('<script language="JavaScript" src="http://www.webrezpro.com/Javascript/jquery-1.3.1.min.js" type="text/javascript"></script>');
	document.writeln('<script language="JavaScript" src="http://www.webrezpro.com/Javascript/ui.core.js" type="text/javascript"></script>');
	document.writeln('<script language="JavaScript" src="http://www.webrezpro.com/Javascript/ui.datepicker.js" type="text/javascript"></script>');
	document.writeln('<link href="http://www.webrezpro.com/Javascript/ui.all.css" rel="stylesheet" type="text/css" />');

	document.writeln('<form name="searchform" action="http://reservation.worldweb.com/hotel/584/" method="get">');
	//document.writeln('<input type="hidden" name="table" value="hotels">');
	//document.writeln('<input type="hidden" name="listing_id" value="584">');
	//document.writeln('<input type="hidden" name="hotel_id" value="584">');
	document.writeln('<input type="hidden" name="mode" value="command">');
	document.writeln('<input type="hidden" name="command" value="pleasewait">');
	document.writeln('<input type="hidden" name="nextcommand" value="roomsearch">');
	document.writeln('<input type="hidden" name="area_id" value="">');
	document.writeln('<input type="hidden" name="reservationcode_id" value="">');
	document.writeln('<input type="hidden" name="location_id" value="">');
	document.writeln('<input type="hidden" name="language" value="english">');

document.writeln('<TABLE style="font-size:10pt;text-align:left;">');
document.writeln('<TR><TD style="font-size:10pt;text-align:left;" COLSPAN="2">Arrival Date<br><input type="text" name="date_from" id="date_from" value="02-18-2012" size="10" style="width:80px;height:15pt;font-size:10pt;text-align:left;"></TD><TD style="font-size:10pt;text-align:left;" VALIGN="BOTTOM"></TD></TR>');
document.writeln('<TR><TD style="font-size:10pt;text-align:left;">Nights<br><select name="num_nights" style="width:50px;height:13pt;font-size:8pt"><option value="1">1<option value="2">2<option value="3">3<option value="4">4<option value="5">5<option value="6">6<option value="7">7<option value="8">8<option value="9">9<option value="10">10<option value="11">11<option value="12">12<option value="13">13<option value="14">14<option value="15">15<option value="16">16<option value="17">17<option value="18">18<option value="19">19<option value="20">20<option value="21">21<option value="22">22<option value="23">23<option value="24">24<option value="25">25<option value="26">26<option value="27">27<option value="28">28<option value="29">29<option value="30">30<option value="31">31<option value="32">32<option value="33">33<option value="34">34<option value="35">35<option value="36">36<option value="37">37<option value="38">38<option value="39">39<option value="40">40<option value="41">41<option value="42">42<option value="43">43<option value="44">44<option value="45">45<option value="46">46<option value="47">47<option value="48">48<option value="49">49</select></TD><TD style="font-size:10pt;text-align:left;" valign="bottom"></TD></TR>');
document.writeln('<TR><TD style="font-size:10pt;text-align:left;" valign="bottom">Adults<br><select name="num_adults" style="width:50px;height:15pt;font-size:10pt;text-align:left;"><option value="1">1<option value="2" selected>2<option value="3">3<option value="4">4<option value="5">5<option value="6">6<option value="7">7<option value="8">8<option value="9">9<option value="10">10<option value="11">11<option value="12">12<option value="13">13<option value="14">14<option value="15">15<option value="16">16<option value="17">17<option value="18">18<option value="19">19<option value="20">20<option value="21">21<option value="22">22<option value="23">23<option value="24">24<option value="25">25<option value="26">26<option value="27">27<option value="28">28<option value="29">29<option value="30">30<option value="31">31<option value="32">32<option value="33">33<option value="34">34<option value="35">35<option value="36">36<option value="37">37<option value="38">38<option value="39">39<option value="40">40</select></TD><TD style="font-size:10pt;text-align:left;" valign="bottom">Children<br><span style="font-size:7pt">12 or under</span><br><select name="num_children" style="width:50px;height:15pt;font-size:10pt;text-align:left;"><option value="0">0<option value="1">1<option value="2">2<option value="3">3<option value="4">4<option value="5">5<option value="6">6<option value="7">7<option value="8">8<option value="9">9<option value="10">10<option value="11">11<option value="12">12<option value="13">13<option value="14">14<option value="15">15<option value="16">16<option value="17">17<option value="18">18<option value="19">19<option value="20">20<option value="21">21<option value="22">22<option value="23">23<option value="24">24<option value="25">25<option value="26">26<option value="27">27<option value="28">28<option value="29">29<option value="30">30<option value="31">31<option value="32">32<option value="33">33<option value="34">34<option value="35">35<option value="36">36<option value="37">37<option value="38">38<option value="39">39<option value="40">40</select></TD><TD style="font-size:10pt;text-align:left;" valign="bottom"></TD></TR>');
document.writeln('<TR><TD style="font-size:10pt;text-align:left;"></TD></TR>');
document.writeln('<TR><TD style="font-size:10pt;text-align:left;" COLSPAN="2">Access code<br><input type="text" name="access_code" size="6" style="width:50px;height:12pt;font-size:10pt;text-align:left;"></TD></TR>');
document.writeln('<!--<TR><TD style="font-size:10pt;text-align:left;" COLSPAN="2">KEY_GUEST_LOGIN</TD></TR>-->');
document.writeln('<!--<TR><TD style="font-size:10pt;text-align:left;" COLSPAN="2">Select hotel<br><SELECT NAME="select_hotel_id" onChange="HotelIDSelected(this.form)"><OPTION VALUE="0">Select hotel KEY_HOTEL_SELECT</SELECT></TD></TR>-->');
document.writeln('<TR><TD style="font-size:10pt;text-align:left;" COLSPAN="3"><input type="submit" style="height:18pt;font-size:10pt;text-align:left;" value="Availability Search"></TD></TR>');
document.writeln('</TR></TABLE>');
	document.writeln('</form>');
	}

function CheckUnitStyleSearchButtons(flag)
	{
	var form = document.searchform;
	if (flag)
		form.turn_on_unitstyle_in_search_all.checked = false;

	if (form.turn_on_unitstyle_in_search_all.checked)
		{
		form.turn_on_unitstyle_in_search_bit0.checked = false;
		form.turn_on_unitstyle_in_search_bit1.checked = false;
		form.turn_on_unitstyle_in_search_bit2.checked = false;
		}
	else if (form.turn_on_unitstyle_in_search_bit0.checked || form.turn_on_unitstyle_in_search_bit1.checked || form.turn_on_unitstyle_in_search_bit2.checked)
		{
		form.turn_on_unitstyle_in_search_all.checked = false;
		}
	}

function HotelIDSelected(form)
	{
	var hotel_id = form.select_hotel_id.value;
	var url = form.action;
	url = url.replace(/hotel\/.+/,"hotel\/" + hotel_id);
	form.action = url;
	}

function checkDate(date)
	{
	var cur = new Date();
	cur.setFullYear(2012,2-1,18);
	//alert(date + ', ' + cur);
	if (cur.getYear() < date.getYear())
		return [true, ''];

	if (cur.getYear() == date.getYear() && cur.getMonth() < date.getMonth())
		return [true, ''];

	if (cur.getYear() == date.getYear() && cur.getMonth() == date.getMonth() && cur.getDate() <= date.getDate())
		return [true, ''];

	return [false, ''];
	}