function dispOto()
{
	var resTxt;
  resText = "<table class=\"oto\" cellpadding=\"12\">";
  resText += "<tr>";
  resText += "<td class=\"oto\" onclick=\"otoClick('わ','^わ')\">わ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ら','^ら')\">ら</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('や','^や')\">や</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ま','^ま')\">ま</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('は','^は|^ば|^ぱ')\">は</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('な','^な')\">な</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('た','^た|^だ')\">た</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('さ','^さ|^ざ')\">さ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('か','^か|^が')\">か</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('あ','^あ')\">あ</td>";
  resText += "</tr>";
  resText += "<tr>";
  resText += "<td class=\"oto\">　</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('り','^り')\">り</td>";
  resText += "<td class=\"oto\">　</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('み','^み')\">み</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ひ','^ひ|^び|^ぴ')\">ひ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('に','^に')\">に</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ち','^ち|^ぢ')\">ち</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('し','^し|^じ')\">し</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('き','^き|^ぎ')\">き</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('い','^い')\">い</td>";
  resText += "</tr>";
  resText += "<tr>";
  resText += "<td class=\"oto\">　</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('る','^る')\">る</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ゆ','^ゆ')\">ゆ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('む','^む')\">む</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ふ','^ふ|^ぶ|^ぷ')\">ふ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ぬ','^ぬ')\">ぬ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('つ','^つ|^づ')\">つ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('す','^す|^ず')\">す</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('く','^く|^ぐ')\">く</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('う','^う')\">う</td>";
  resText += "</tr>";
  resText += "<tr>";
  resText += "<td class=\"oto\">　</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('れ','^れ')\">れ</td>";
  resText += "<td class=\"oto\">　</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('め','^め')\">め</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('へ','^へ|^べ|^ぺ')\">へ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ね','^ね')\">ね</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('て','^て|^で')\">て</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('せ','^せ|^ぜ')\">せ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('け','^け|^げ')\">け</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('え','^え')\">え</td>";
  resText += "</tr>";
  resText += "<tr>";
  resText += "<td class=\"oto\" onclick=\"otoClick('を','^を')\">を</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ろ','^ろ')\">ろ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('よ','^よ')\">よ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('も','^も')\">も</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('ほ','^ほ|^ぼ|^ぽ')\">ほ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('の','^の')\">の</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('と','^と|^ど')\">と</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('そ','^そ|^ぞ')\">そ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('こ','^こ|^ご')\">こ</td>";
  resText += "<td class=\"oto\" onclick=\"otoClick('お','^お')\">お</td>";
  resText += "</tr>";
  resText += "</table>";

  YAHOO.util.Dom.get("oto_result").innerHTML = resText;
}

function otoClick(sMidasi, sRex)
{
  var resText;
  resText = "<h1>" + sMidasi + "で始まる色の名前" + "</h1><br />";
  resText += "<form>";
  resText += "<table>";
  resText += "<tr>";
  resText += "<td class=\"navi_setgyou\">";
  resText += "行を表示：";
  resText += "<select name=\"example\">";
  resText += "<option>10</option>";
  resText += "<option>30</option>";
  resText += "<option>50</option>";
  resText += "</select>";
  resText += "</td>";
  resText += "<td class=\"navi_dispgyou\">52件中 1～10 件を表示</td>";
  resText += "<td class=\"navi_button\">｜＜</td>";
  resText += "<td class=\"navi_button\">＜</td>";
  resText += "<td class=\"navi_button\">＞</td>";
  resText += "<td class=\"navi_button\">＞｜</td>";
  resText += "</tr>";
  resText += "</table>";
  resText += "</form>";
  resText += "<table>";
  resText += "<tr>";
  resText += "<th>色</th>";
  resText += "<th>名称</th>";
  resText += "<th>めいしょう</th>";
  resText += "<th>R</th>";
  resText += "<th>G</th>";
  resText += "<th>B</th>";
  resText += "<th>#code</th>";
  resText += "</tr>";
  for(i=0; i<fullNum; i++) {
    if(fullYomi[i].search(sRex)==0) {
      resText += "<tr>"
      resText += "<td bgcolor=\"" + rgb2code(fullRval[i],fullGval[i],fullBval[i]) + "\" width=\"40\">" + "　</td>";
      resText += "<td>" + fullKaki[i] + "</td>";
      resText += "<td>" + fullYomi[i] + "</td>";
      resText += "<td class=\"rgb\">" + fullRval[i] + "</td>";
      resText += "<td class=\"rgb\">" + fullGval[i] + "</td>";
      resText += "<td class=\"rgb\">" + fullBval[i] + "</td>";
      resText += "<td>" + rgb2code(fullRval[i],fullGval[i],fullBval[i]) + "</td>";
      resText += "</tr>";
    }
  }
  resText += "</table><br />";
  YAHOO.util.Dom.get("oto_result").innerHTML = resText;
}

function otoNavigation() {
  
}

