const articles=[
{id:1,title:"ダイヤモンドを効率よく集める方法",desc:"ダイヤモンドを探すときの考え方と採掘の基本を初心者向けに解説。",cat:"採掘",icon:"◆",keywords:"ダイヤ ダイヤモンド 鉱石 採掘",popular:true,body:["ダイヤモンドを探すなら、まずは必要な道具と食料を準備してから地下へ向かいましょう。","闇雲に掘るより、探索ルートを決めて安全を確保することが大切です。","見つけた鉱石は周囲の安全を確認してから回収しましょう。"]},
{id:2,title:"村人との取引を効率化する方法",desc:"村人を使った取引を始めるための基本と、拠点づくりのポイント。",cat:"村人",icon:"●",keywords:"村人 取引 エメラルド",popular:true,body:["村人取引は、必要なアイテムを安定して集めたいときに役立ちます。","最初は取引内容を確認し、自分が欲しいアイテムを扱う職業の村人を探しましょう。","村人を安全な場所に移動させ、モンスターから守ることも重要です。"]},
{id:3,title:"ネザーへ行く前に準備するもの",desc:"ネザー探索で困らないために、出発前に確認したい装備とアイテム。",cat:"ネザー",icon:"▲",keywords:"ネザー ポータル 溶岩",popular:true,body:["ネザーは通常世界とは環境が大きく違うため、出発前の準備が重要です。","食料、予備の道具、建築ブロックなどを持っていくと安心です。","帰還用のポータル周辺は目印を付け、迷子にならないようにしましょう。"]},
{id:4,title:"初心者が最初に作るべきアイテム",desc:"ゲーム開始直後に何を作ればいいか迷った人向けのスタートガイド。",cat:"初心者",icon:"◇",keywords:"初心者 木材 作業台 ツルハシ",popular:false,body:["最初は木材を集めて基本的な道具をそろえましょう。","作業台を作ったら、石を集めて石の道具へ進むのが基本です。","夜になる前に安全な拠点や仮住居を確保しておくと安心です。"]},
{id:5,title:"安全な拠点の作り方",desc:"初心者でも作りやすい、モンスター対策を意識した拠点づくり。",cat:"建築",icon:"■",keywords:"建築 家 拠点 初心者",popular:false,body:["拠点は見つけやすく、周囲を確認しやすい場所に作ると便利です。","出入口や照明を整えて、安全に出入りできるようにしましょう。","チェストや作業設備をまとめると、日々の作業効率も上がります。"]},
{id:6,title:"おすすめシード値を探すときのポイント",desc:"シード値を選ぶときに確認したい条件と、遊び方別の考え方。",cat:"シード",icon:"◎",keywords:"シード シード値 ワールド",popular:false,body:["シード値は、どんな遊び方をしたいかで選ぶと探しやすくなります。","建築目的なら景観、冒険目的なら地形や周辺環境など、優先順位を決めましょう。","ゲームのバージョンによって生成結果が変わる場合があるため、記事には対応バージョンを明記します。"]},
{id:7,title:"レッドストーン初心者ガイド",desc:"レッドストーンを初めて触る人向けに、基本的な考え方を整理。",cat:"レッドストーン",icon:"●",keywords:"レッドストーン 回路 自動化",popular:false,body:["レッドストーンは、信号を使って装置を動かす仕組みです。","最初はレバーやボタンなど、分かりやすい部品から試してみましょう。","小さな回路を動かしてから、少しずつ複雑な装置に挑戦すると理解しやすくなります。"]},
{id:8,title:"コマンドを安全に試す方法",desc:"コマンド初心者が、実験用ワールドで試すときの基本。",cat:"コマンド",icon:"⌘",keywords:"コマンド チート コマンドブロック",popular:false,body:["コマンドは、まず実験用のワールドで試すと安心です。","入力ミスに備えて、重要なワールドでは事前にバックアップを取っておきましょう。","公開記事では、対応バージョンや前提条件を明記すると読者に親切です。"]}
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
  $("#resultGrid").innerHTML=results.length?results.map(card).join(""):`<div class="info-card"><p>該当する記事がありません。別のキーワードで試してください。</p></div>`;
  $("#searchResults").scrollIntoView({behavior:"smooth",block:"start"});
}
$("#searchForm").addEventListener("submit",e=>{e.preventDefault();search($("#searchInput").value)});
$("#clearSearch").addEventListener("click",()=>{$("#searchResults").classList.add("hidden");$("#searchInput").value=""});
$("#mobileSearch").addEventListener("click",()=>{$("#searchInput").focus();$("#searchInput").scrollIntoView({behavior:"smooth",block:"center"})});
renderHome();
