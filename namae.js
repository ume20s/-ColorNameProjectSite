var namaeText;

var searchButton;
var searchNamaeText;

var namaeRowsPerPage, namaeCurrentPage;
var namaeStart, namaeEnd;
var namaeRowsSelect;

// メニューの色名検索をクリックした
function namaeClick()
{
  // オブジェクトの取得
  searchNamaeText = document.getElementById('sNamae');
  searchButton = document.getElementById('namaeSearchButton');

  // 検索ボタンクリックイベントの取得
  searchButton.addEventListener('click', searchNamae);

  // 初期値の設定
  namaeRowsPerPage = 15;
}

function searchNamae()
{
  kekkaNum = 0;
  for(var i=0; i<fullNum; i++) {
    if((full[i][YOMI] + full[i][KAKI]).search(searchNamaeText.value) != -1) {
      kekka[kekkaNum][YOMI] = full[i][YOMI];
      kekka[kekkaNum][KAKI] = full[i][KAKI];
      kekka[kekkaNum][RVAL] = full[i][RVAL];
      kekka[kekkaNum][GVAL] = full[i][GVAL];
      kekka[kekkaNum][BVAL] = full[i][BVAL];
      kekkaNum++;
    }
  }
  // 検索結果表示
  namaeCurrentPage = 1;
  dispNamae();
}

function dispNamae()
{
  // ナビゲーションバー
  namaeText = "<form>";
  namaeText += "<table>";
  namaeText += "<tr>";
  namaeText += "<td class=\"navi_setgyou\">";
  namaeText += "1ページ件数：";
  namaeText += "<select id=\"namae_rows\">";
  // １ページあたり件数によってselectedの位置を変える
  if(namaeRowsPerPage == 15) {
    namaeText += "<option value=\"15\" selected>15</option>";
    namaeText += "<option value=\"30\">30</option>";
    namaeText += "<option value=\"50\">50</option>";
    namaeText += "<option value=\"100\">100</option>";
  } else if(namaeRowsPerPage == 30) {
    namaeText += "<option value=\"15\">15</option>";
    namaeText += "<option value=\"30\" selected>30</option>";
    namaeText += "<option value=\"50\">50</option>";
    namaeText += "<option value=\"100\">100</option>";
  } else if(namaeRowsPerPage == 50) {
    namaeText += "<option value=\"15\">15</option>";
    namaeText += "<option value=\"30\">30</option>";
    namaeText += "<option value=\"50\" selected>50</option>";
    namaeText += "<option value=\"100\">100</option>";
  } else {
    namaeText += "<option value=\"15\">15</option>";
    namaeText += "<option value=\"30\">30</option>";
    namaeText += "<option value=\"50\">50</option>";
    namaeText += "<option value=\"100\" selected>100</option>";
  }
  namaeText += "</select>";
  namaeText += "</td>";
  namaeText += "<td class=\"navi_button\" onclick=\"namaeNaviStart()\">｜＜</td>";
  namaeText += "<td class=\"navi_button\" onclick=\"namaeNaviDec()\">＜</td>";
  namaeText += "<td class=\"navi_button\" onclick=\"namaeNaviInc()\">＞</td>";
  namaeText += "<td class=\"navi_button\" onclick=\"namaeNaviEnd()\">＞｜</td>";
  namaeText += "</tr>";
  namaeText += "</table>";
  namaeText += "</form>";
  namaeText += "<DIV id=\"namaepage_result\"></DIV>";

  YAHOO.util.Dom.get("namae_result").innerHTML = namaeText;

  // ドロップダウンメニューの変更イベントを取得
  namaeRowsSelect = document.getElementById('namae_rows');
  namaeRowsSelect.addEventListener('change', namaeRowsPerPageChange);

  dispNamaePage();
}

function dispNamaePage()
{
  // 表示ページの計算
  namaeStart = namaeRowsPerPage * (namaeCurrentPage-1);
  if(kekkaNum < namaeRowsPerPage * namaeCurrentPage) {
    namaeEnd = kekkaNum;
  } else {
    namaeEnd = namaeRowsPerPage * namaeCurrentPage;
  }

  // 現在表示しているページ数の表示
  namaeText = "<table>";
  namaeText += "<tr>";
  namaeText += "<td class=\"navi_dispgyou\">";
  namaeText += "ページ:" + namaeCurrentPage + "/" + (Math.floor((kekkaNum-1) / namaeRowsPerPage) + 1) + "　件数:";
  namaeText += kekkaNum + "件中" + (namaeStart+1) + "～" + namaeEnd + "件を表示</td>";
  namaeText += "</tr>";
  namaeText += "</table><br />";

  // 色データ表示
  namaeText += "<table>";
  namaeText += "<tr>";
  namaeText += "<th>色</th>";
  namaeText += "<th>名称</th>";
  namaeText += "<th>めいしょう</th>";
  namaeText += "<th>R</th>";
  namaeText += "<th>G</th>";
  namaeText += "<th>B</th>";
  namaeText += "<th>#code</th>";
  namaeText += "</tr>";
  
  // 検索結果が０件だったらメッセージを表示して終了
  if(kekkaNum == 0) {
    namaeText += "<tr><td></td>";
    namaeText += "<td colspan=5>  残念ながら「" + searchNamaeText.value + "」を含む色名はありませんでした。</td>";
    namaeText += "<td></td></tr>";
  } else {
    for(var i=namaeStart; i<namaeEnd; i++) {
      namaeText += "<tr>"
      namaeText += "<td bgcolor=\"" + rgb2code(kekka[i][RVAL],kekka[i][GVAL],kekka[i][BVAL]) + "\" width=\"40\">" + "　</td>";
      namaeText += "<td>" + kekka[i][KAKI] + "</td>";
      namaeText += "<td>" + kekka[i][YOMI] + "</td>";
      namaeText += "<td class=\"rgb\">" + kekka[i][RVAL] + "</td>";
      namaeText += "<td class=\"rgb\">" + kekka[i][GVAL] + "</td>";
      namaeText += "<td class=\"rgb\">" + kekka[i][BVAL] + "</td>";
      namaeText += "<td>" + rgb2code(kekka[i][RVAL],kekka[i][GVAL],kekka[i][BVAL]) + "</td>";
      namaeText += "</tr>";
    }
  }


  namaeText += "</table><br />";

  YAHOO.util.Dom.get("namaepage_result").innerHTML = namaeText;
}

// ナビゲーションバー操作
function namaeNaviStart()
{
  namaeCurrentPage = 1;
  dispNamaePage();
}

function namaeNaviDec()
{
  if(namaeCurrentPage > 1) {
    namaeCurrentPage--;
    dispNamaePage();
  }
}

function namaeNaviInc()
{
  if(kekkaNum > namaeCurrentPage * namaeRowsPerPage) {
    namaeCurrentPage++;
    dispNamaePage();
  }
}

function namaeNaviEnd()
{
  namaeCurrentPage = Math.floor((kekkaNum-1) / namaeRowsPerPage) + 1;
  dispNamaePage();
}

// ナビゲーションバーの１ページ行数を操作した時
function namaeRowsPerPageChange()
{
  namaeRowsPerPage = namaeRowsSelect.value;
  namaeCurrentPage = Math.floor(namaeStart / namaeRowsPerPage) + 1;
  dispNamaePage();
}
