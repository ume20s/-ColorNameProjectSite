var kinjiText;
var sliderRed, sliderGreen, sliderBlue, sliderGosa;
var kinjiPanel, kinjiCode;

var kinjiRowsPerPage, kinjiCurrentPage;
var kinjiStart, kinjiEnd;
var kinjiRowsSelect;

// メニューの近似色検索をクリックした
function kinjiClick()
{
  // スライダーオブジェクトの取得
  sliderRed = document.getElementById('rangeRed');
  sliderGreen = document.getElementById('rangeGreen');
  sliderBlue = document.getElementById('rangeBlue');
  sliderGosa = document.getElementById('rangeGosa');

  // 表示パネル部品オブジェクトの取得
  kinjiPanel = document.getElementById('panel');
  kinjiCode = document.getElementById('code');

  // 初期値の設定
  sliderRed.value = 128;
  sliderGreen.value = 128;
  sliderBlue.value = 128;
  sliderGosa.value = 20;
  YAHOO.util.Dom.get("dispValueRed").innerHTML = sliderRed.value;
  YAHOO.util.Dom.get("dispValueGreen").innerHTML = sliderGreen.value;
  YAHOO.util.Dom.get("dispValueBlue").innerHTML = sliderBlue.value;
  YAHOO.util.Dom.get("dispValueGosa").innerHTML = (sliderGosa.value / 10).toFixed(1);

  // 表示部分の初期化
  sliderRedInput();
  sliderGreenInput();
  sliderBlueInput();
  dispPanel();
  
  // スライダー操作中イベントの取得
  sliderRed.addEventListener('input', sliderRedInput);
  sliderGreen.addEventListener('input', sliderGreenInput);
  sliderBlue.addEventListener('input', sliderBlueInput);
  sliderGosa.addEventListener('input', sliderGosaInput);

  // スライダー変更イベントの取得
  sliderRed.addEventListener('change', searchKinji);
  sliderGreen.addEventListener('change', searchKinji);
  sliderBlue.addEventListener('change', searchKinji);

  // 初期状態で検索
  searchKinji();
}

// スライダー操作中の表示変更
function sliderRedInput()
{
  var bgText;
  YAHOO.util.Dom.get("dispValueRed").innerHTML = sliderRed.value;
  bgText = '-webkit-linear-gradient(left, #ffdddd 0% ';
  bgText += (sliderRed.value*100/255).toString() + '%, ' + '#f0f0f0 ';
  bgText += (sliderRed.value*100/255).toString()+'% 100%)';
  sliderRed.style.background = bgText;
  dispPanel();
}
function sliderGreenInput()
{
  var bgText;
  YAHOO.util.Dom.get("dispValueGreen").innerHTML = sliderGreen.value;
  bgText = '-webkit-linear-gradient(left, #ddffdd 0% ';
  bgText += (sliderGreen.value*100/255).toString() + '%, ' + '#f0f0f0 ';
  bgText += (sliderGreen.value*100/255).toString()+'% 100%)';
  sliderGreen.style.background = bgText; 
  dispPanel();
}
function sliderBlueInput()
{
  var bgText;
  YAHOO.util.Dom.get("dispValueBlue").innerHTML = sliderBlue.value;
  bgText = '-webkit-linear-gradient(left, #ddddff 0% ';
  bgText += (sliderBlue.value*100/255).toString() + '%, ' + '#f0f0f0 ';
  bgText += (sliderBlue.value*100/255).toString()+'% 100%)';
  sliderBlue.style.background = bgText; 
  dispPanel();
}
function sliderGosaInput()
{
  var bgText;
  YAHOO.util.Dom.get("dispValueGosa").innerHTML = (sliderGosa.value/10).toFixed(1);
  bgText = '-webkit-linear-gradient(left, #dddddd 0% ';
  bgText += (sliderGosa.value*100/50).toString() + '%, ' + '#f0f0f0 ';
  bgText += (sliderGosa.value*100/50).toString()+'% 100%)';
  sliderGosa.style.background = bgText;
  searchKinji();
}

// パネル色表示
function dispPanel()
{
  var codeText;
  codeText = rgb2code(parseInt(sliderRed.value),parseInt(sliderGreen.value),parseInt(sliderBlue.value));
  kinjiPanel.style.background = codeText;
  YAHOO.util.Dom.get("dispCode").innerHTML = codeText;
}

// 近似色検索
function searchKinji()
{
  var gosa;

  // 許容誤差以下の色を検索
  kekkaNum = 0;
  for(var i=0; i<fullNum; i++) {
		gosa = Math.round((Math.abs(sliderRed.value-fullRval[i]) 
                     + Math.abs(sliderGreen.value-fullGval[i]) 
                     + Math.abs(sliderBlue.value-fullBval[i])) / 765 * 1000);
    if(gosa <= sliderGosa.value) {
      kekkaYomi[kekkaNum] = fullYomi[i];
      kekkaKaki[kekkaNum] = fullKaki[i];
      kekkaRval[kekkaNum] = fullRval[i];
      kekkaGval[kekkaNum] = fullGval[i];
      kekkaBval[kekkaNum] = fullBval[i];
      kekkaNum++;
    }
  }

  // 検索結果表示
  kinjiCurrentPage = 1;
  kinjiRowsPerPage = 15;
  dispKinji();
}

// 近似色表示本体
function dispKinji()
{
  // ナビゲーションバー
  kinjiText = "<form>";
  kinjiText += "<table>";
  kinjiText += "<tr>";
  kinjiText += "<td class=\"navi_setgyou\">";
  kinjiText += "1ページ件数：";
  kinjiText += "<select id=\"kinji_rows\">";
  kinjiText += "<option value=\"15\">15</option>";
  kinjiText += "<option value=\"30\">30</option>";
  kinjiText += "<option value=\"50\">50</option>";
  kinjiText += "</select>";
  kinjiText += "</td>";
  kinjiText += "<td class=\"navi_button\" onclick=\"kinjiNaviStart()\">｜＜</td>";
  kinjiText += "<td class=\"navi_button\" onclick=\"kinjiNaviDec()\">＜</td>";
  kinjiText += "<td class=\"navi_button\" onclick=\"kinjiNaviInc()\">＞</td>";
  kinjiText += "<td class=\"navi_button\" onclick=\"kinjiNaviEnd()\">＞｜</td>";
  kinjiText += "</tr>";
  kinjiText += "</table>";
  kinjiText += "</form>";
  kinjiText += "<DIV id=\"kinjipage_result\"></DIV>";

  YAHOO.util.Dom.get("kinji_result").innerHTML = kinjiText;

  // ドロップダウンメニューの変更イベントを取得
  kinjiRowsSelect = document.getElementById('kinji_rows');
  kinjiRowsSelect.addEventListener('change', kinjiRowsPerPageChange);

  dispKinjiPage();
}

// 近似色ページ表示
function dispKinjiPage()
{
  // 表示ページの計算
  kinjiStart = kinjiRowsPerPage * (kinjiCurrentPage-1);
  if(kekkaNum < kinjiRowsPerPage * kinjiCurrentPage) {
    kinjiEnd = kekkaNum;
  } else {
    kinjiEnd = kinjiRowsPerPage * kinjiCurrentPage;
  }

  // 現在表示しているページ数の表示
  kinjiText = "<table>";
  kinjiText += "<tr>";
  kinjiText += "<td class=\"navi_dispgyou\">";
  kinjiText += "ページ:" + kinjiCurrentPage + "/" + (Math.floor((kekkaNum-1) / kinjiRowsPerPage) + 1) + "　件数:";
  kinjiText += kekkaNum + "件中" + (kinjiStart+1) + "～" + kinjiEnd + "件を表示</td>";
  kinjiText += "</tr>";
  kinjiText += "</table><br />";
  
  // 色データ表示
  kinjiText += "<table>";
  kinjiText += "<tr>";
  kinjiText += "<th>色</th>";
  kinjiText += "<th>名称</th>";
  kinjiText += "<th>めいしょう</th>";
  kinjiText += "<th>R</th>";
  kinjiText += "<th>G</th>";
  kinjiText += "<th>B</th>";
  kinjiText += "<th>#code</th>";
  kinjiText += "</tr>";
  for(var i=kinjiStart; i<kinjiEnd; i++) {
    kinjiText += "<tr>"
    kinjiText += "<td bgcolor=\"" + rgb2code(kekkaRval[i],kekkaGval[i],kekkaBval[i]) + "\" width=\"40\">" + "　</td>";
    kinjiText += "<td>" + kekkaKaki[i] + "</td>";
    kinjiText += "<td>" + kekkaYomi[i] + "</td>";
    kinjiText += "<td class=\"rgb\">" + kekkaRval[i] + "</td>";
    kinjiText += "<td class=\"rgb\">" + kekkaGval[i] + "</td>";
    kinjiText += "<td class=\"rgb\">" + kekkaBval[i] + "</td>";
    kinjiText += "<td>" + rgb2code(kekkaRval[i],kekkaGval[i],kekkaBval[i]) + "</td>";
    kinjiText += "</tr>";
  }
  kinjiText += "</table><br />";

  YAHOO.util.Dom.get("kinjipage_result").innerHTML = kinjiText;
}

// ナビゲーションバー操作
function kinjiNaviStart()
{
  kinjiCurrentPage = 1;
  dispKinjiPage();
}

function kinjiNaviDec()
{
  if(kinjiCurrentPage > 1) {
    kinjiCurrentPage--;
    dispKinjiPage();
  }
}

function kinjiNaviInc()
{
  if(kekkaNum > kinjiCurrentPage * kinjiRowsPerPage) {
    kinjiCurrentPage++;
    dispKinjiPage();
  }
}

function kinjiNaviEnd()
{
  kinjiCurrentPage = Math.floor((kekkaNum-1) / kinjiRowsPerPage) + 1;
  dispKinjiPage();
}

// ナビゲーションバーの１ページ行数を操作した時
function kinjiRowsPerPageChange()
{
  kinjiRowsPerPage = kinjiRowsSelect.value;
  kinjiCurrentPage = Math.floor(kinjiStart / kinjiRowsPerPage) + 1;
  dispKinjiPage();
}
