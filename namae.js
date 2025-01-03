var searchButton;

function namaeClick()
{
  // 検索ボタンオブジェクトの取得
  searchButton = document.getElementById('namaeSearchButton');

  // スライダー操作中イベントの取得
  searchButton.addEventListener('click', namaeSearch);
}


function namaeSearch()
{
  YAHOO.util.Dom.get("namae_result").innerHTML = "検索結果その２";
}
