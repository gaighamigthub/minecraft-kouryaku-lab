const articles=[
{id:1,title:"ダイヤモンドを効率よく集める方法",desc:"ダイヤモンドを探すときの考え方と採掘の基本を初心者向けに解説。",cat:"採掘",icon:"◆",keywords:"ダイヤ ダイヤモンド 鉱石 採掘",popular:true,body:["ダイヤモンドを探す前に、鉄以上のツルハシ、食料、松明、予備のブロックを準備しましょう。","地下では安全なルートを決め、洞窟や溶岩の近くでは周囲を確認しながら探索するのが基本です。","鉱石を見つけてもすぐ掘らず、周囲に溶岩がないか確認してから回収しましょう。"]},
{id:2,title:"村人との取引を効率化する方法",desc:"村人を使った取引を始めるための基本と、拠点づくりのポイント。",cat:"村人",icon:"●",keywords:"村人 取引 エメラルド",popular:true,body:["村人取引を始めるなら、まず安全な取引場所と必要な職業ブロックを用意しましょう。","欲しいアイテムを扱う職業の村人を選び、取引内容を確認しながら少しずつ環境を整えます。","村人がモンスターに襲われないよう、照明や壁を整えて安全を確保しましょう。"]},
{id:3,title:"ネザーへ行く前に準備するもの",desc:"ネザー探索で困らないために、出発前に確認したい装備とアイテム。",cat:"ネザー",icon:"▲",keywords:"ネザー ポータル 溶岩",popular:true,body:["ネザーは通常世界とは環境が大きく違うため、出発前の準備が重要です。","食料、予備の道具、建築ブロック、遠距離攻撃用の装備などを状況に合わせて持っていきましょう。","帰還用ポータル周辺には目印を付け、迷子にならないよう座標や経路を確認しておきましょう。"]},
{id:4,title:"初心者が最初に作るべきアイテム",desc:"ゲーム開始直後に何を作ればいいか迷った人向けのスタートガイド。",cat:"初心者",icon:"◇",keywords:"初心者 木材 作業台 ツルハシ",popular:false,body:["最初は木材を集めて、作業台と基本的な道具をそろえましょう。","作業台を作ったら石を集め、石の道具へ進むと採掘や戦闘が楽になります。","夜になる前に安全な仮住居を確保し、食料と松明も準備しましょう。"]},
{id:5,title:"安全な拠点の作り方",desc:"初心者でも作りやすい、モンスター対策を意識した拠点づくり。",cat:"建築",icon:"■",keywords:"建築 家 拠点 初心者",popular:false,body:["拠点は見つけやすく、周囲を確認しやすい場所に作ると便利です。","出入口、照明、壁を整え、モンスターが侵入しにくい環境を作りましょう。","チェストや作業設備をまとめると、日々の作業効率も上がります。"]},
{id:6,title:"おすすめシード値を探すときのポイント",desc:"シード値を選ぶときに確認したい条件と、遊び方別の考え方。",cat:"シード",icon:"◎",keywords:"シード シード値 ワールド",popular:false,body:["シード値は、どんな遊び方をしたいかで条件を決めると探しやすくなります。","建築目的なら景観、冒険目的なら地形や周辺環境など、優先順位を決めましょう。","ゲームのバージョンによって生成結果が変わる場合があるため、対応バージョンを確認しましょう。"]},
{id:7,title:"レッドストーン初心者ガイド",desc:"レッドストーンを初めて触る人向けに、基本的な考え方を整理。",cat:"レッドストーン",icon:"●",keywords:"レッドストーン 回路 自動化",popular:false,body:["レッドストーンは、信号を使って装置を動かす仕組みです。","最初はレバーやボタンなど、分かりやすい部品から試してみましょう。","小さな回路を動かしてから、少しずつ複雑な装置に挑戦すると理解しやすくなります。"]},
{id:8,title:"コマンドを安全に試す方法",desc:"コマンド初心者が、実験用ワールドで試すときの基本。",cat:"コマンド",icon:"⌘",keywords:"コマンド チート コマンドブロック",popular:false,body:["コマンドは、まず実験用のワールドで試すと安心です。","入力ミスに備えて、重要なワールドでは事前にバックアップを取りましょう。","公開記事では、対応バージョンや前提条件を明記すると読者に親切です。"]},
{id:9,title:"鉄を効率よく集める方法",desc:"序盤から役立つ鉄を集めるための基本と、安全な探索のコツを解説。",cat:"採掘",icon:"◆",keywords:"鉄 鉄鉱石 採掘 洞窟",popular:true,body:["鉄は道具、防具、バケツなど用途が多いため、序盤から安定して集めることが大切です。","洞窟を探索するときは松明で道を確保し、見つけた鉄鉱石を安全を確認しながら回収しましょう。","深追いして迷子にならないよう、帰り道の目印や座標確認を習慣にしましょう。"]},
{id:10,title:"村を見つける方法と見つけた後にやること",desc:"村を探すときの考え方と、見つけた後に確認したいポイントを初心者向けに解説。",cat:"村人",icon:"●",keywords:"村 村人 探し方 ベッド",popular:false,body:["村を探す前に食料と地図代わりになる目印を用意し、探索範囲を決めましょう。","村を見つけたら、ベッド、職業ブロック、畑などを確認し、必要なものを整理します。","村人やアイアンゴーレムに迷惑をかけないよう、夜間のモンスター対策と安全確保を優先しましょう。"]},
{id:11,title:"序盤の食料を安定させる方法",desc:"Minecraft序盤で食料不足を防ぐための、集め方と安定供給の基本を解説。",cat:"初心者",icon:"◇",keywords:"食料 農業 小麦 牛 羊 初心者",popular:false,body:["序盤は探索だけに集中せず、早めに安定した食料源を作ることが大切です。","近くで手に入る食料を確保しつつ、畑や動物の飼育など自分の拠点に合う方法を整えましょう。","食料を使い切って遠くで動けなくならないよう、探索時には予備を持つ習慣をつけましょう。"]},
{id:12,title:"エンチャント初心者ガイド",desc:"エンチャントを初めて使う人向けに、基本の準備と進め方を分かりやすく解説。",cat:"初心者",icon:"✦",keywords:"エンチャント 本棚 経験値 ダイヤ",popular:true,body:["エンチャントを始めるには、必要な設備と経験値を準備し、まず基本の仕組みを理解しましょう。","よく使う道具や防具から試し、目的に合う効果を少しずつ覚えると無駄が減ります。","貴重な装備をいきなり使う前に、必要な経験値や効果を確認してから進めましょう。"]},
];

const cats=[["初心者","◇"],["採掘","◆"],["建築","■"],["村人","●"],["ネザー","▲"],["シード","◎"],["コマンド","⌘"],["レッドストーン","●"]];

const $=s=>document.querySelector(s);
const card=a=>`<a class="card" href="article.html?id=${a.id}"><div class="card-icon">${a.icon}</div><h3>${a.title}</h3><p>${a.desc}</p><span class="tag">${a.cat}</span></a>`;
function renderHome(){
  $("#popularGrid").innerHTML=articles.filter(a=>a.popular).map(card).join("");
  $("#latestGrid").innerHTML=articles.map(card).join("");
  $("#categoryGrid").innerHTML=cats.map(([n,i])=>`<button class="category" data-cat="${n}"><span class="category-icon">${i}</span>${n}</button>`).join("");
  document.querySelectorAll(".category").forEach(b=>b.addEventListener("click",()=>search(b.dataset.cat)));
}
function search(q){
  const term=q.trim().toLowerCase(); if(!term){return}
  const results=articles.filter(a=>`${a.title} ${a.desc} ${a.cat} ${a.keywords}`.toLowerCase().includes(term));
  $("#searchResults").classList.remove("hidden");
  $("#resultMeta").textContent=`「${q}」の検索結果：${results.length}件`;
  $("#resultGrid").innerHTML=results.length?results.map(card).join():`<div class="info-card"><p>該当する記事がありません。別のキーワードで試してください。</p></div>`;
  $("#searchResults").scrollIntoView({behavior:"smooth",block:"start"});
}
$("#searchForm").addEventListener("submit",e=>{e.preventDefault();search($("#searchInput").value)});
$("#clearSearch").addEventListener("click",()=>{$("#searchResults").classList.add("hidden");$("#searchInput").value=""});
$("#mobileSearch").addEventListener("click",()=>{$("#searchInput").focus();$("#searchInput").scrollIntoView({behavior:"smooth",block:"center"});});
renderHome();
