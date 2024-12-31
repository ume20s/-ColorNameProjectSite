var sliderRed, sliderGreen, sliderBlue;
var kinjiPanel, kinjiCode;
var kinjiText;

// メニューの近似色検索をクリックした
function kinjiClick()
{
  // スライダーオブジェクトの取得
  sliderRed = document.getElementById('rangeRed');
  sliderGreen = document.getElementById('rangeGreen');
  sliderBlue = document.getElementById('rangeBlue');
  sliderGosa = document.getElementById('rangeGosa');
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
  dispPanel();
  
  // スライダー操作中
  sliderRed.addEventListener('input', sliderRedInput);
  sliderGreen.addEventListener('input', sliderGreenInput);
  sliderBlue.addEventListener('input', sliderBlueInput);
  sliderGosa.addEventListener('input', sliderGosaInput);
}

// スライダー表示
function sliderRedInput()
{
  YAHOO.util.Dom.get("dispValueRed").innerHTML = sliderRed.value;
  kinjiText = '-webkit-linear-gradient(left, #ffdddd 0% ';
  kinjiText += (sliderRed.value*100/255).toString() + '%, ' + '#f0f0f0 ';
  kinjiText += (sliderRed.value*100/255).toString()+'% 100%)';
  sliderRed.style.background = kinjiText;
  dispPanel();
}
function sliderGreenInput()
{
  YAHOO.util.Dom.get("dispValueGreen").innerHTML = sliderGreen.value;
  kinjiText = '-webkit-linear-gradient(left, #ddffdd 0% ';
  kinjiText += (sliderGreen.value*100/255).toString() + '%, ' + '#f0f0f0 ';
  kinjiText += (sliderGreen.value*100/255).toString()+'% 100%)';
  sliderGreen.style.background = kinjiText; 
  dispPanel();
}
function sliderBlueInput()
{
  YAHOO.util.Dom.get("dispValueBlue").innerHTML = sliderBlue.value;
  kinjiText = '-webkit-linear-gradient(left, #ddddff 0% ';
  kinjiText += (sliderBlue.value*100/255).toString() + '%, ' + '#f0f0f0 ';
  kinjiText += (sliderBlue.value*100/255).toString()+'% 100%)';
  sliderBlue.style.background = kinjiText; 
  dispPanel();
}
function sliderGosaInput()
{
  YAHOO.util.Dom.get("dispValueGosa").innerHTML = (sliderGosa.value/10).toFixed(1);
  kinjiText = '-webkit-linear-gradient(left, #dddddd 0% ';
  kinjiText += (sliderGosa.value*100/50).toString() + '%, ' + '#f0f0f0 ';
  kinjiText += (sliderGosa.value*100/50).toString()+'% 100%)';
  sliderGosa.style.background = kinjiText; 
}

// パネル色表示
function dispPanel()
{
  var codeText;
  codeText = rgb2code(parseInt(sliderRed.value),parseInt(sliderGreen.value),parseInt(sliderBlue.value));
  kinjiPanel.style.background = codeText;
  YAHOO.util.Dom.get("dispCode").innerHTML = codeText;
}