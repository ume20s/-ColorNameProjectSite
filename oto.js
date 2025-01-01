var otoText;
var otoRowsPerPage, otoCurrentPage;
var otoStart, otoEnd;
var otoMidasi;
var otoRowsSelect;

function disp50Oto()
{
  otoText = "<table class=\"oto\" cellpadding=\"12\">";
  otoText += "<tr>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('わ','^わ')\">わ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ら','^ら')\">ら</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('や','^や')\">や</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ま','^ま')\">ま</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('は','^は|^ば|^ぱ')\">は</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('な','^な')\">な</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('た','^た|^だ')\">た</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('さ','^さ|^ざ')\">さ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('か','^か|^が')\">か</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('あ','^あ')\">あ</td>";
  otoText += "</tr>";
  otoText += "<tr>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('り','^り')\">り</td>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('み','^み')\">み</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ひ','^ひ|^び|^ぴ')\">ひ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('に','^に')\">に</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ち','^ち|^ぢ')\">ち</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('し','^し|^じ')\">し</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('き','^き|^ぎ')\">き</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('い','^い')\">い</td>";
  otoText += "</tr>";
  otoText += "<tr>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('る','^る')\">る</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ゆ','^ゆ')\">ゆ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('む','^む')\">む</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ふ','^ふ|^ぶ|^ぷ')\">ふ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ぬ','^ぬ')\">ぬ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('つ','^つ|^づ')\">つ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('す','^す|^ず')\">す</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('く','^く|^ぐ')\">く</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('う','^う')\">う</td>";
  otoText += "</tr>";
  otoText += "<tr>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('れ','^れ')\">れ</td>";
  otoText += "<td class=\"oto\">　</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('め','^め')\">め</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('へ','^へ|^べ|^ぺ')\">へ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ね','^ね')\">ね</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('て','^て|^で')\">て</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('せ','^せ|^ぜ')\">せ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('け','^け|^げ')\">け</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('え','^え')\">え</td>";
  otoText += "</tr>";
  otoText += "<tr>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('を','^を')\">を</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ろ','^ろ')\">ろ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('よ','^よ')\">よ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('も','^も')\">も</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('ほ','^ほ|^ぼ|^ぽ')\">ほ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('の','^の')\">の</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('と','^と|^ど')\">と</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('そ','^そ|^ぞ')\">そ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('こ','^こ|^ご')\">こ</td>";
  otoText += "<td class=\"oto\" onclick=\"otoClick('お','^お')\">お</td>";
  otoText += "</tr>";
  otoText += "</table>";

  YAHOO.util.Dom.get("oto_result").innerHTML = otoText;
}

// 50音表で文字を選択したとき
function otoClick(sMidasi, sRex)
{
  // 先頭文字で正規表現検索
  searchOto(sRex);

  // １ページ表示数と表示ページの初期化
  otoRowsPerPage = 15;
  otoCurrentPage = 1;

  // 結果表示
  otoMidasi = sMidasi;
  dispOto();

  // ドロップダウンメニューの変更イベントを取得
  otoRowsSelect = document.getElementById('oto_rows');
  otoRowsSelect.addEventListener('change', otoRowsPerPageChange);
}

// 見出し文字の正規表現で検索
function searchOto(sRex)
{
  kekkaNum = 0;
  for(var i=0; i<fullNum; i++) {
    if(full[i][YOMI].search(sRex)==0) {
      kekka[kekkaNum][YOMI] = full[i][YOMI];
      kekka[kekkaNum][KAKI] = full[i][KAKI];
      kekka[kekkaNum][RVAL] = full[i][RVAL];
      kekka[kekkaNum][GVAL] = full[i][GVAL];
      kekka[kekkaNum][BVAL] = full[i][BVAL];
      kekkaNum++;
    }
  }
}

// 音に対応した色名表示本体
function dispOto()
{
  // タイトル
  otoText = "<h1>" + otoMidasi + "で始まる色の名前" + "</h1><br />";

  // ナビゲーションバー
  otoText += "<form>";
  otoText += "<table>";
  otoText += "<tr>";
  otoText += "<td class=\"navi_setgyou\">";
  otoText += "1ページ件数：";
  otoText += "<select id=\"oto_rows\">";
  otoText += "<option value=\"15\">15</option>";
  otoText += "<option value=\"30\">30</option>";
  otoText += "<option value=\"50\">50</option>";
  otoText += "<option value=\"100\">100</option>";
  otoText += "</select>";
  otoText += "</td>";
  otoText += "<td class=\"navi_button\" onclick=\"otoNaviStart()\">｜＜</td>";
  otoText += "<td class=\"navi_button\" onclick=\"otoNaviDec()\">＜</td>";
  otoText += "<td class=\"navi_button\" onclick=\"otoNaviInc()\">＞</td>";
  otoText += "<td class=\"navi_button\" onclick=\"otoNaviEnd()\">＞｜</td>";
  otoText += "</tr>";
  otoText += "</table>";
  otoText += "</form>";
  otoText += "<DIV id=\"otopage_result\"></DIV>";

  YAHOO.util.Dom.get("oto_result").innerHTML = otoText;
  dispOtoPage();
}

// 音ページ表示
function dispOtoPage()
{
  // 表示ページの計算
  otoStart = otoRowsPerPage * (otoCurrentPage-1);
  if(kekkaNum < otoRowsPerPage * otoCurrentPage) {
    otoEnd = kekkaNum;
  } else {
    otoEnd = otoRowsPerPage * otoCurrentPage;
  }

  // 現在表示しているページ数の表示
  otoText = "<table>";
  otoText += "<tr>";
  otoText += "<td class=\"navi_dispgyou\">";
  otoText += "ページ:" + otoCurrentPage + "/" + (Math.floor((kekkaNum-1) / otoRowsPerPage) + 1) + "　件数:";
  otoText += kekkaNum + "件中" + (otoStart+1) + "～" + otoEnd + "件を表示</td>";
  otoText += "</tr>";
  otoText += "</table><br />";
  
  // 色データ表示
  otoText += "<table>";
  otoText += "<tr>";
  otoText += "<th>色</th>";
  otoText += "<th>名称</th>";
  otoText += "<th>めいしょう</th>";
  otoText += "<th>R</th>";
  otoText += "<th>G</th>";
  otoText += "<th>B</th>";
  otoText += "<th>#code</th>";
  otoText += "</tr>";
  for(var i=otoStart; i<otoEnd; i++) {
    otoText += "<tr>"
    otoText += "<td bgcolor=\"" + rgb2code(kekka[i][RVAL],kekka[i][GVAL],kekka[i][BVAL]) + "\" width=\"40\">" + "　</td>";
    otoText += "<td>" + kekka[i][KAKI] + "</td>";
    otoText += "<td>" + kekka[i][YOMI] + "</td>";
    otoText += "<td class=\"rgb\">" + kekka[i][RVAL] + "</td>";
    otoText += "<td class=\"rgb\">" + kekka[i][GVAL] + "</td>";
    otoText += "<td class=\"rgb\">" + kekka[i][BVAL] + "</td>";
    otoText += "<td>" + rgb2code(kekka[i][RVAL],kekka[i][GVAL],kekka[i][BVAL]) + "</td>";
    otoText += "</tr>";
  }
  otoText += "</table><br />";

  YAHOO.util.Dom.get("otopage_result").innerHTML = otoText;
}

// ナビゲーションバー操作
function otoNaviStart()
{
  otoCurrentPage = 1;
  dispOtoPage();
}

function otoNaviDec()
{
  if(otoCurrentPage > 1) {
    otoCurrentPage--;
    dispOtoPage();
  }
}

function otoNaviInc()
{
  if(kekkaNum > otoCurrentPage * otoRowsPerPage) {
    otoCurrentPage++;
    dispOtoPage();
  }
}

function otoNaviEnd()
{
  otoCurrentPage = Math.floor((kekkaNum-1) / otoRowsPerPage) + 1;
  dispOtoPage();
}

// ナビゲーションバーの１ページ行数を操作した時
function otoRowsPerPageChange(){
  otoRowsPerPage = otoRowsSelect.value;
  otoCurrentPage = Math.floor(otoStart / otoRowsPerPage) + 1;
  dispOtoPage();
}
