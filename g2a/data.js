// ================================================
// 二年级上册 · 全部数据
// ================================================
var DATA = {
  grade: 'g2a',
  gradeName: '二年级上册',
  gradeEn: 'Grade 2A',

  // ============================
  // 词汇（约60个）
  // ============================
  words: [
    // 日常起居
    {en:"get up",zh:"起床",t:"日常起居",s:"I get up at seven."},
    {en:"brush my teeth",zh:"刷牙",t:"日常起居",s:"I brush my teeth every day."},
    {en:"wash my face",zh:"洗脸",t:"日常起居",s:"I wash my face."},
    {en:"have breakfast",zh:"吃早餐",t:"日常起居",s:"I have breakfast."},
    // 房间
    {en:"bed",zh:"床",t:"房间",s:"The cat is on the bed."},
    {en:"desk",zh:"书桌",t:"房间",s:"The book is on the desk."},
    {en:"chair",zh:"椅子",t:"房间",s:"Sit on the chair."},
    {en:"box",zh:"盒子",t:"房间",s:"The ball is in the box."},
    {en:"book",zh:"书",t:"房间",s:"I love reading books."},
    {en:"bookshelf",zh:"书架",t:"房间",s:"Books are on the bookshelf."},
    {en:"lamp",zh:"台灯",t:"房间",s:"The lamp is on the desk."},
    // 位置
    {en:"on",zh:"在…上面",t:"位置",s:"The book is on the desk."},
    {en:"in",zh:"在…里面",t:"位置",s:"The ball is in the box."},
    {en:"under",zh:"在…下面",t:"位置",s:"The cat is under the bed."},
    {en:"tidy",zh:"整洁的",t:"位置",s:"My room is tidy."},
    {en:"put",zh:"放",t:"位置",s:"Put the book on the desk."},
    // 出行
    {en:"car",zh:"小汽车",t:"出行",s:"I go by car."},
    {en:"bus",zh:"公共汽车",t:"出行",s:"I go to school by bus."},
    {en:"bicycle",zh:"自行车",t:"出行",s:"I ride a bicycle."},
    {en:"walk",zh:"步行",t:"出行",s:"I walk to school."},
    {en:"school",zh:"学校",t:"出行",s:"I love my school."},
    // 运动
    {en:"football",zh:"足球",t:"运动",s:"Let's play football!"},
    {en:"basketball",zh:"篮球",t:"运动",s:"She plays basketball."},
    {en:"ping-pong",zh:"乒乓球",t:"运动",s:"He plays ping-pong."},
    {en:"run",zh:"跑步",t:"运动",s:"I can run fast."},
    {en:"jump",zh:"跳跃",t:"运动",s:"I can jump high."},
    {en:"play",zh:"玩;打(球)",t:"运动",s:"Let's play!"},
    // 天空
    {en:"sun",zh:"太阳",t:"天空",s:"The sun is bright."},
    {en:"moon",zh:"月亮",t:"天空",s:"The moon is round."},
    {en:"star",zh:"星星",t:"天空",s:"I see many stars."},
    {en:"cloud",zh:"云",t:"天空",s:"I see white clouds."},
    {en:"sky",zh:"天空",t:"天空",s:"The sky is blue."},
    // 海洋
    {en:"seahorse",zh:"海马",t:"海洋",s:"I see a seahorse."},
    {en:"dolphin",zh:"海豚",t:"海洋",s:"The dolphin can swim."},
    {en:"clownfish",zh:"小丑鱼",t:"海洋",s:"The clownfish is orange."},
    {en:"sea",zh:"大海",t:"海洋",s:"I swim in the sea."},
    {en:"swim",zh:"游泳",t:"海洋",s:"I can swim."},
    // 四季
    {en:"spring",zh:"春天",t:"四季",s:"Spring is warm."},
    {en:"summer",zh:"夏天",t:"四季",s:"Summer is hot."},
    {en:"autumn",zh:"秋天",t:"四季",s:"Autumn is cool."},
    {en:"winter",zh:"冬天",t:"四季",s:"Winter is cold."},
    {en:"warm",zh:"温暖的",t:"四季",s:"Spring is warm."},
    {en:"hot",zh:"热的",t:"四季",s:"Summer is hot."},
    {en:"cool",zh:"凉爽的",t:"四季",s:"Autumn is cool."},
    {en:"cold",zh:"冷的",t:"四季",s:"Winter is cold."},
    // 水果
    {en:"apple",zh:"苹果",t:"水果",s:"I love apples!"},
    {en:"pear",zh:"梨",t:"水果",s:"The pear is yellow."},
    {en:"orange",zh:"橙子",t:"水果",s:"I need an orange."},
    {en:"banana",zh:"香蕉",t:"水果",s:"The banana is sweet."},
    {en:"grape",zh:"葡萄",t:"水果",s:"Grapes are purple."},
    {en:"fruit",zh:"水果",t:"水果",s:"I love fruit."},
    {en:"sweet",zh:"甜的",t:"水果",s:"The apple is sweet."},
    // 感官
    {en:"see",zh:"看见",t:"感官",s:"I see a bird."},
    {en:"hear",zh:"听见",t:"感官",s:"I hear birds."},
    {en:"smell",zh:"闻",t:"感官",s:"I smell flowers."},
    {en:"taste",zh:"尝",t:"感官",s:"I taste the fruit."},
    {en:"touch",zh:"触摸",t:"感官",s:"I touch the grass."},
    // 才艺
    {en:"draw",zh:"画画",t:"才艺",s:"I can draw."},
    {en:"read",zh:"阅读",t:"才艺",s:"I love reading."},
    {en:"sing",zh:"唱歌",t:"才艺",s:"I can sing."},
    {en:"dance",zh:"跳舞",t:"才艺",s:"I can dance."},
    {en:"picture",zh:"画;图片",t:"才艺",s:"I draw a picture."},
    {en:"friend",zh:"朋友",t:"才艺",s:"She is my friend."}
  ],

  // ============================
  // 短句（约45个）
  // en = 带高亮HTML, p = 纯文本（用于默写校验）
  // ============================
  sentences: [
    // 日常起居
    {en:'I <b>get up</b> at seven.',zh:'我七点起床。',t:'日常起居',p:'I get up at seven.'},
    {en:'I <b>brush my teeth</b> every day.',zh:'我每天刷牙。',t:'日常起居',p:'I brush my teeth every day.'},
    {en:'I <b>wash my face</b> in the morning.',zh:'我早上洗脸。',t:'日常起居',p:'I wash my face in the morning.'},
    {en:'I <b>have breakfast</b> with Mum.',zh:'我和妈妈一起吃早餐。',t:'日常起居',p:'I have breakfast with Mum.'},
    // 房间与位置
    {en:'The book is <b>on</b> the <span class="nb">desk</span>.',zh:'书在书桌上面。',t:'房间与位置',p:'The book is on the desk.'},
    {en:'The ball is <b>in</b> the <span class="nb">box</span>.',zh:'球在盒子里面。',t:'房间与位置',p:'The ball is in the box.'},
    {en:'The cat is <b>under</b> the <span class="nb">bed</span>.',zh:'猫在床下面。',t:'房间与位置',p:'The cat is under the bed.'},
    {en:'The <span class="nb">lamp</span> is on the <span class="nb">bookshelf</span>.',zh:'台灯在书架上。',t:'房间与位置',p:'The lamp is on the bookshelf.'},
    {en:'<b>Put</b> the book on the desk.',zh:'把书放在书桌上。',t:'房间与位置',p:'Put the book on the desk.'},
    {en:'My room is <b>tidy</b>!',zh:'我的房间很整洁！',t:'房间与位置',p:'My room is tidy!'},
    // 出行
    {en:'I go to <span class="nb">school</span> by <span class="nb">bus</span>.',zh:'我坐公共汽车去学校。',t:'出行',p:'I go to school by bus.'},
    {en:'I go by <span class="nb">car</span>.',zh:'我坐小汽车去。',t:'出行',p:'I go by car.'},
    {en:'I ride a <span class="nb">bicycle</span>.',zh:'我骑自行车。',t:'出行',p:'I ride a bicycle.'},
    {en:'I <b>walk</b> to school.',zh:'我走路去学校。',t:'出行',p:'I walk to school.'},
    // 运动
    {en:'Let\'s <b>play</b> <span class="nb">football</span>!',zh:'我们踢足球吧！',t:'运动',p:"Let's play football!"},
    {en:'She plays <span class="nb">basketball</span>.',zh:'她打篮球。',t:'运动',p:'She plays basketball.'},
    {en:'He plays <span class="nb">ping-pong</span>.',zh:'他打乒乓球。',t:'运动',p:'He plays ping-pong.'},
    {en:'I can <b>run</b> fast!',zh:'我跑得快！',t:'运动',p:'I can run fast!'},
    {en:'I can <b>jump</b> high!',zh:'我跳得高！',t:'运动',p:'I can jump high!'},
    // 天空与海洋
    {en:'The <span class="nb">sun</span> is bright.',zh:'太阳很明亮。',t:'天空与海洋',p:'The sun is bright.'},
    {en:'I see many <span class="nb">star</span>s.',zh:'我看见很多星星。',t:'天空与海洋',p:'I see many stars.'},
    {en:'The <span class="nb">moon</span> is round.',zh:'月亮圆圆的。',t:'天空与海洋',p:'The moon is round.'},
    {en:'I see white <span class="nb">cloud</span>s in the <span class="nb">sky</span>.',zh:'我看见天空中的白云。',t:'天空与海洋',p:'I see white clouds in the sky.'},
    {en:'I <b>swim</b> in the <span class="nb">sea</span>.',zh:'我在大海里游泳。',t:'天空与海洋',p:'I swim in the sea.'},
    {en:'I see a <span class="nb">dolphin</span>!',zh:'我看见一只海豚！',t:'天空与海洋',p:'I see a dolphin!'},
    {en:'The <span class="nb">seahorse</span> is small.',zh:'海马很小。',t:'天空与海洋',p:'The seahorse is small.'},
    {en:'The <span class="nb">clownfish</span> is orange.',zh:'小丑鱼是橙色的。',t:'天空与海洋',p:'The clownfish is orange.'},
    // 四季
    {en:'<b>Spring</b> is <b>warm</b>.',zh:'春天很温暖。',t:'四季',p:'Spring is warm.'},
    {en:'<b>Summer</b> is <b>hot</b>.',zh:'夏天很热。',t:'四季',p:'Summer is hot.'},
    {en:'<b>Autumn</b> is <b>cool</b>.',zh:'秋天很凉爽。',t:'四季',p:'Autumn is cool.'},
    {en:'<b>Winter</b> is <b>cold</b>.',zh:'冬天很冷。',t:'四季',p:'Winter is cold.'},
    // 水果
    {en:'I eat a sweet <span class="nb">orange</span>.',zh:'我吃一个甜甜的橙子。',t:'水果',p:'I eat a sweet orange.'},
    {en:'The <span class="nb">pear</span> is yellow.',zh:'梨是黄色的。',t:'水果',p:'The pear is yellow.'},
    {en:'I love <span class="nb">fruit</span>!',zh:'我喜欢水果！',t:'水果',p:'I love fruit!'},
    {en:'<span class="nb">Grape</span>s are purple.',zh:'葡萄是紫色的。',t:'水果',p:'Grapes are purple.'},
    {en:'I pick a red <span class="nb">apple</span>.',zh:'我摘了一个红苹果。',t:'水果',p:'I pick a red apple.'},
    // 感官
    {en:'I <b>see</b> a bird.',zh:'我看见一只鸟。',t:'感官',p:'I see a bird.'},
    {en:'I <b>hear</b> birds singing.',zh:'我听见鸟儿在唱歌。',t:'感官',p:'I hear birds singing.'},
    {en:'I <b>smell</b> the flowers.',zh:'我闻花香。',t:'感官',p:'I smell the flowers.'},
    {en:'I <b>taste</b> the sweet fruit.',zh:'我品尝甜甜的水果。',t:'感官',p:'I taste the sweet fruit.'},
    {en:'I <b>touch</b> the soft grass.',zh:'我触摸柔软的小草。',t:'感官',p:'I touch the soft grass.'},
    // 才艺
    {en:'I can <b>draw</b> a <span class="nb">picture</span>.',zh:'我会画一幅画。',t:'才艺',p:'I can draw a picture.'},
    {en:'I can <b>read</b> a <span class="nb">book</span>.',zh:'我会读书。',t:'才艺',p:'I can read a book.'},
    {en:'I can <b>sing</b> a song.',zh:'我会唱歌。',t:'才艺',p:'I can sing a song.'},
    {en:'I can <b>dance</b>!',zh:'我会跳舞！',t:'才艺',p:'I can dance!'},
    {en:'She is my <span class="nb">friend</span>.',zh:'她是我的朋友。',t:'才艺',p:'She is my friend.'}
  ],

  // ============================
  // 拓展阅读（4篇跨单元融合故事）
  // ============================
  expand: [
    {
      title: "A Day in Shanghai",
      titleZh: "上海的一天",
      paras: [
        {en:'Good morning, Shanghai! I <span class="v">get up</span> at seven. I <span class="v">brush my teeth</span>, <span class="v">wash my face</span>, and <span class="v">have breakfast</span> with Mum.',zh:'早上好，上海！我七点起床。我刷牙、洗脸，和妈妈一起吃早餐。'},
        {en:'The <span class="n">sun</span> is bright. White <span class="n">cloud</span>s are in the <span class="n">sky</span>. I can <span class="v">hear</span> birds singing.',zh:'阳光明媚。白云在天空中。我听见鸟儿在唱歌。'},
        {en:'I go to <span class="n">school</span>. Not by <span class="n">car</span>, not by <span class="n">bicycle</span>. I go by <span class="n">bus</span>! My <span class="n">friend</span> <span class="v">walk</span>s.',zh:'我去学校。不坐小汽车，不骑自行车。我坐公共汽车！我的朋友走路去。'},
        {en:'At school, we <span class="v">play</span> <span class="n">football</span>. I can <span class="v">run</span> fast! She <span class="v">play</span>s <span class="n">basketball</span>. He <span class="v">play</span>s <span class="n">ping-pong</span>.',zh:'在学校，我们踢足球。我跑得快！她打篮球。他打乒乓球。'},
        {en:'I can <span class="v">jump</span> high! "Well done!" says the teacher. I love to <span class="v">play</span>!',zh:'我跳得高！"做得好！"老师说。我喜欢运动！'},
        {en:'After school, I <span class="v">walk</span> home. I <span class="v">see</span> the <span class="n">moon</span> and many <span class="n">star</span>s.',zh:'放学后，我走路回家。我看见月亮和很多星星。'},
        {en:'I <span class="v">smell</span> dinner. Yummy! I <span class="v">taste</span> a <span class="o">sweet</span> <span class="n">orange</span>. I <span class="v">touch</span> my cat. It is soft.',zh:'我闻到晚餐的香味。真好吃！我品尝一个甜甜的橙子。我摸摸我的猫。它很柔软。'},
        {en:'I can <span class="v">draw</span> a <span class="n">picture</span> of my day. I can <span class="v">read</span> a <span class="n">book</span> before sleep. What a nice day!',zh:'我可以画一幅我的一天的画。睡觉前我可以读一本书。多美好的一天！'}
      ]
    },
    {
      title: "Seasons of Fruit",
      titleZh: "水果四季",
      paras: [
        {en:'<span class="o">Spring</span> is <span class="o">warm</span>. I <span class="v">see</span> white flowers on the tree. I <span class="v">smell</span> the flowers. How nice!',zh:'春天温暖。我看见树上白色的花。我闻花香。真好闻！'},
        {en:'<span class="o">Summer</span> is <span class="o">hot</span>. I <span class="v">taste</span> a <span class="o">sweet</span> <span class="n">orange</span>. I eat a yellow <span class="n">banana</span>. I love <span class="n">fruit</span>!',zh:'夏天很热。我品尝甜甜的橙子。我吃一根黄香蕉。我喜欢水果！'},
        {en:'I <span class="v">swim</span> in the <span class="n">sea</span>. I <span class="v">see</span> a <span class="n">dolphin</span>! A <span class="n">seahorse</span>! A <span class="n">clownfish</span>! The <span class="n">sea</span> is wonderful.',zh:'我在大海里游泳。我看见海豚！海马！小丑鱼！大海真奇妙。'},
        {en:'<span class="o">Autumn</span> is <span class="o">cool</span>. I pick a red <span class="n">apple</span>. I pick a yellow <span class="n">pear</span>. Purple <span class="n">grape</span>s are so <span class="o">sweet</span>!',zh:'秋天凉爽。我摘了红苹果。我摘了黄梨。紫色的葡萄真甜！'},
        {en:'I <span class="v">touch</span> the <span class="n">apple</span>. It is smooth. I <span class="v">smell</span> it. It smells nice! I <span class="v">taste</span> it. Yummy!',zh:'我触摸苹果。它很光滑。我闻一闻。真好闻！我尝一口。真好吃！'},
        {en:'<span class="o">Winter</span> is <span class="o">cold</span>. But I still eat <span class="n">fruit</span> every day. <span class="n">Fruit</span> makes me strong.',zh:'冬天很冷。但我每天还是吃水果。水果让我强壮。'},
        {en:'I can <span class="v">sing</span> a song about <span class="n">fruit</span>. I can <span class="v">draw</span> a <span class="n">picture</span> of my favourite <span class="n">fruit</span>.',zh:'我可以唱一首关于水果的歌。我可以画一幅我最喜欢的水果的画。'},
        {en:'Four seasons, so much <span class="n">fruit</span>! <span class="o">Spring</span>, <span class="o">summer</span>, <span class="o">autumn</span>, <span class="o">winter</span> — I love them all!',zh:'四季有好多水果！春天、夏天、秋天、冬天——我全都喜欢！'}
      ]
    },
    {
      title: "My Room, My Sky",
      titleZh: "我的房间，我的天空",
      paras: [
        {en:'This is my room. The <span class="n">book</span> is <span class="o">on</span> the <span class="n">desk</span>. The ball is <span class="o">in</span> the <span class="n">box</span>. The cat is <span class="o">under</span> the <span class="n">bed</span>.',zh:'这是我的房间。书在书桌上面。球在盒子里面。猫在床下面。'},
        {en:'The <span class="n">lamp</span> is <span class="o">on</span> the <span class="n">bookshelf</span>. I sit <span class="o">on</span> the <span class="n">chair</span>. My room is <span class="o">tidy</span>! I <span class="v">put</span> things in the right place.',zh:'台灯在书架上。我坐在椅子上。我的房间很整洁！我把东西放在该放的地方。'},
        {en:'I look out the window. I <span class="v">see</span> the <span class="n">sun</span> in the <span class="n">sky</span>. I see white <span class="n">cloud</span>s. The <span class="n">sky</span> is blue.',zh:'我看着窗外。我看见天空中的太阳。我看见白云。天空是蓝色的。'},
        {en:'At night, I <span class="v">see</span> the <span class="n">moon</span>. It is round. I see many <span class="n">star</span>s. Twinkle, twinkle!',zh:'晚上，我看见月亮。它圆圆的。我看见很多星星。一闪一闪！'},
        {en:'In my dream, I <span class="v">swim</span> in the <span class="n">sea</span>. I see a <span class="n">dolphin</span> jump. I see a <span class="n">seahorse</span>. I see a little <span class="n">clownfish</span>.',zh:'在梦里，我在大海里游泳。我看见海豚跳起来。我看见海马。我看见小丑鱼。'},
        {en:'I <span class="v">hear</span> the <span class="n">sea</span>. I <span class="v">touch</span> the water. It is <span class="o">cool</span>. I <span class="v">smell</span> the <span class="n">sea</span>. What a wonderful world!',zh:'我听见大海的声音。我触摸海水。它很凉爽。我闻到大海的气息。多么美好的世界！'},
        {en:'I <span class="v">get up</span>. It is morning. I can <span class="v">draw</span> a <span class="n">picture</span> of my dream. I can <span class="v">read</span> a <span class="n">book</span> about the <span class="n">sea</span>.',zh:'我起床了。早晨到了。我可以画一幅我梦里的画。我可以读一本关于大海的书。'},
        {en:'I can <span class="v">sing</span> and <span class="v">dance</span>! I love my room, my <span class="n">sky</span>, and my dream of the <span class="n">sea</span>.',zh:'我会唱歌跳舞！我喜欢我的房间、我的天空，还有我的大海之梦。'}
      ]
    },
    {
      title: "I Am Special",
      titleZh: "我很特别",
      paras: [
        {en:'Hello! Look at me! I <span class="v">get up</span> early every day. I <span class="v">brush my teeth</span> and <span class="v">wash my face</span>. I am ready!',zh:'你好！看看我！我每天早早起床。我刷牙洗脸。我准备好了！'},
        {en:'I <span class="v">see</span> with my eyes. I <span class="v">hear</span> with my ears. I <span class="v">smell</span> with my nose. I <span class="v">taste</span> with my mouth. I <span class="v">touch</span> with my hands.',zh:'我用眼睛看。我用耳朵听。我用鼻子闻。我用嘴巴尝。我用双手触摸。'},
        {en:'I can <span class="v">run</span> fast! I can <span class="v">jump</span> high! I can <span class="v">swim</span> in the <span class="n">sea</span>! I can <span class="v">play</span> <span class="n">football</span>!',zh:'我跑得快！我跳得高！我能在海里游泳！我会踢足球！'},
        {en:'I can <span class="v">draw</span> a <span class="n">picture</span>. I can <span class="v">read</span> a <span class="n">book</span>. I can <span class="v">sing</span> a song. I can <span class="v">dance</span>!',zh:'我会画画。我会读书。我会唱歌。我会跳舞！'},
        {en:'I go to <span class="n">school</span> by <span class="n">bus</span>. I have many <span class="n">friend</span>s. We <span class="v">play</span> <span class="n">basketball</span> and <span class="n">ping-pong</span> together.',zh:'我坐公共汽车去学校。我有很多朋友。我们一起打篮球和乒乓球。'},
        {en:'I <span class="v">put</span> my <span class="n">book</span> <span class="o">on</span> the <span class="n">desk</span>. My room is <span class="o">tidy</span>. I like to keep things clean.',zh:'我把书放在书桌上。我的房间很整洁。我喜欢保持整洁。'},
        {en:'In <span class="o">spring</span>, I <span class="v">smell</span> the flowers. In <span class="o">summer</span>, I <span class="v">taste</span> <span class="o">sweet</span> <span class="n">fruit</span>. In <span class="o">autumn</span>, I <span class="v">touch</span> the leaves. In <span class="o">winter</span>, I <span class="v">see</span> the <span class="o">cold</span> <span class="n">moon</span>.',zh:'春天，我闻花香。夏天，我品尝甜甜的水果。秋天，我触摸落叶。冬天，我看见清冷的月亮。'},
        {en:'Everyone is special. I am special. You are special. We are all special!',zh:'每个人都是特别的。我很特别。你很特别。我们都很特别！'}
      ]
    }
  ],

  // ============================
  // The Big Story（有教育意义的大故事）
  // ============================
  finale: {
    paras: [
      {en:'<span class="o">Spring</span> is <span class="o">warm</span>. The flowers come out. One morning, Shenshen <span class="v">gets up</span> early. He <span class="v">brushes his teeth</span>, <span class="v">washes his face</span>, and <span class="v">has breakfast</span>.',zh:'春天温暖。花儿开了。一天早上，申申早早起床。他刷牙、洗脸、吃早餐。'},
      {en:'"What a beautiful day!" says Shenshen. He looks out the window. The <span class="n">sun</span> is bright. White <span class="n">cloud</span>s are in the <span class="n">sky</span>.',zh:'"多美的一天！"申申说。他看向窗外。阳光明媚。白云在天空中。'},
      {en:'Shenshen tidies his room. He <span class="v">puts</span> the <span class="n">book</span> <span class="o">on</span> the <span class="n">desk</span>. He puts the ball <span class="o">in</span> the <span class="n">box</span>. The <span class="n">lamp</span> goes <span class="o">on</span> the <span class="n">bookshelf</span>.',zh:'申申整理房间。他把书放在书桌上。他把球放进盒子。台灯放在书架上。'},
      {en:'"My room is <span class="o">tidy</span>!" he says. Mum smiles. "Good boy! Now, how do you go to <span class="n">school</span>?"',zh:'"我的房间很整洁！"他说。妈妈笑了。"好孩子！你怎么去学校？"'},
      {en:'"Not by <span class="n">car</span>. Not by <span class="n">bicycle</span>. I go by <span class="n">bus</span>!" says Shenshen. His <span class="n">friend</span> <span class="v">walks</span> to school. They go together.',zh:'"不坐小汽车，不骑自行车。我坐公共汽车！"申申说。他的朋友走路去学校。他们一起去。'},
      {en:'At school, Shenshen <span class="v">plays</span> <span class="n">football</span>. He can <span class="v">run</span> fast! His friend plays <span class="n">basketball</span>. She can <span class="v">jump</span> high! Another friend plays <span class="n">ping-pong</span>.',zh:'在学校，申申踢足球。他跑得快！他的朋友打篮球。她跳得高！另一个朋友打乒乓球。'},
      {en:'"<span class="v">Play</span> with everyone!" says the teacher. "We all have something special."',zh:'"和大家一起玩！"老师说。"每个人都有特别的地方。"'},
      {en:'<span class="o">Summer</span> comes. It is <span class="o">hot</span>. Shenshen goes to the <span class="n">sea</span>. He <span class="v">swims</span> in the blue water.',zh:'夏天到了。天气很热。申申去海边。他在蓝色的海水里游泳。'},
      {en:'He <span class="v">sees</span> a <span class="n">dolphin</span> jump! He sees a <span class="n">seahorse</span>! He sees a little <span class="n">clownfish</span>! "The <span class="n">sea</span> is wonderful!" he says.',zh:'他看见海豚跳起来！他看见海马！他看见小丑鱼！"大海真奇妙！"他说。'},
      {en:'<span class="o">Autumn</span> is <span class="o">cool</span>. Shenshen picks a red <span class="n">apple</span> from the tree. He picks a yellow <span class="n">pear</span>. He tastes purple <span class="n">grape</span>s.',zh:'秋天凉爽。申申从树上摘了红苹果。他摘了黄梨。他品尝紫色的葡萄。'},
      {en:'He <span class="v">touches</span> the <span class="n">apple</span> — smooth. He <span class="v">smells</span> it — nice! He <span class="v">tastes</span> it — <span class="o">sweet</span>! "<span class="n">Fruit</span> is the best!" he says.',zh:'他触摸苹果——光滑。他闻一闻——香！他尝一口——甜！"水果最好了！"他说。'},
      {en:'He shares his <span class="n">fruit</span> with his <span class="n">friends</span>. "Thank you, Shenshen!" they say. "Sharing makes us happy."',zh:'他把水果分享给朋友们。"谢谢你，申申！"他们说。"分享让我们快乐。"'},
      {en:'<span class="o">Winter</span> is <span class="o">cold</span>. But Shenshen still <span class="v">plays</span> with friends. He can <span class="v">draw</span> a <span class="n">picture</span> of the <span class="n">sea</span>. He can <span class="v">read</span> a <span class="n">book</span> about the <span class="n">sky</span>.',zh:'冬天很冷。但申申还是和朋友们一起玩。他可以画大海的画。他可以读关于天空的书。'},
      {en:'He can <span class="v">sing</span> a song about <span class="o">spring</span>. He can <span class="v">dance</span> like the <span class="n">dolphin</span>. He can <span class="v">hear</span> the wind and <span class="v">touch</span> the <span class="o">cold</span> <span class="n">moon</span>light.',zh:'他可以唱春天的歌。他可以像海豚一样跳舞。他能听见风声，触摸冰冷的月光。'},
      {en:'Now it is <span class="o">spring</span> again. The flowers come back. The world goes round and round.',zh:'现在又是春天了。花儿又开了。世界在转动。'},
      {en:'Shenshen <span class="v">gets up</span> and <span class="v">sees</span> the <span class="n">sun</span>. "Good morning, world! I am here!"',zh:'申申起床看见太阳。"早上好，世界！我在这里！"',cls:'highlight'},
      {en:'I <span class="v">see</span>, I <span class="v">hear</span>, I <span class="v">smell</span>, I <span class="v">taste</span>, I <span class="v">touch</span>.<br>I can <span class="v">run</span>, <span class="v">jump</span>, <span class="v">swim</span>, <span class="v">draw</span>, <span class="v">read</span>, <span class="v">sing</span> and <span class="v">dance</span>.<br>I love the <span class="o">warm</span> <span class="o">spring</span>, the <span class="o">hot</span> <span class="o">summer</span>, the <span class="o">cool</span> <span class="o">autumn</span>, and the <span class="o">cold</span> <span class="o">winter</span>.',zh:'我看、听、闻、尝、触摸。<br>我能跑、跳、游泳、画画、阅读、唱歌和跳舞。<br>我喜欢温暖的春天、炎热的夏天、凉爽的秋天和寒冷的冬天。',cls:'highlight'},
      {en:'Everyone is special. I love my <span class="n">friends</span>, my <span class="n">school</span>, and this beautiful world. This is me!',zh:'每个人都是特别的。我爱我的朋友、我的学校和这个美丽的世界。这就是我！',cls:'ending'}
    ]
  },

  // ============================
  // 课本原文（10个单元·含歌谣/对话/故事/迷你项目）
  // ============================
  textbook: [
    {
      unit: 1,
      title: "Shenshen's Morning",
      titleZh: '申申的早晨',
      words: ['get up','brush my teeth','wash my face','have breakfast'],
      sentences: [
        {en:'Good morning!', zh:'早上好！'},
        {en:'I get up and then I brush my teeth.', zh:'我起床然后刷牙。'},
        {en:'I wash my face.', zh:'我洗脸。'},
        {en:'I have breakfast.', zh:'我吃早餐。'},
        {en:"I'm ready for school!", zh:'我准备好上学了！'}
      ],
      chant: "Morning, morning,\nGood morning.\nUp, up, get up.\nUp and down, brush my teeth.\nSplish, splash, wash my face.\nReady, ready, I'm ready.",
      dialogue: [
        {role:'Mum',en:'Good morning, Shenshen!'},
        {role:'Shenshen',en:'Good morning, Mum!'},
        {role:'Mum',en:'Brush your teeth.'},
        {role:'Shenshen',en:'OK, Mum.'},
        {role:'Shenshen',en:'I brush my teeth and then I wash my face.'}
      ],
      story: {title:"Shenshen's morning",lines:[
        {role:'Mum',en:'Have breakfast, Shenshen.'},
        {role:'Shenshen',en:'Yes, Mum!'},
        {role:'Shenshen',en:"I'm ready for school, Dad!"},
        {role:'Dad',en:"I'm coming."},
        {role:'Dad',en:"Let's go!"}
      ]},
      miniProject: {title:'My morning checklist',steps:[
        'Choose the pictures and stick them in your checklist.',
        'Show and tell.',
        'Look! This is my morning. I ... Well done!'
      ]}
    },
    {
      unit: 2,
      title: 'My Room',
      titleZh: '我的房间',
      words: ['bed','desk','chair','box','book','bookshelf','lamp','on','in','under','put','tidy'],
      sentences: [
        {en:'Where is the book?', zh:'书在哪里？'},
        {en:"It's on the desk.", zh:'它在书桌上面。'},
        {en:"It's in the box.", zh:'它在盒子里面。'},
        {en:"It's under the bed.", zh:'它在床下面。'},
        {en:'Put the book on the desk.', zh:'把书放在书桌上。'},
        {en:'My room is tidy!', zh:'我的房间很整洁！'}
      ],
      dialogue: [
        {role:'Shenshen',en:'Mum ... Mum!'},
        {role:'Shenshen',en:"Where's my ball?"},
        {role:'Mum',en:'What a mess!'},
        {role:'Shenshen',en:'Sorry.'},
        {role:'Mum',en:"Let's tidy the room together."},
        {role:'Mum',en:'Put the books on the shelf.'},
        {role:'Shenshen',en:'OK. What about the toys?'},
        {role:'Mum',en:'In the box?'},
        {role:'Shenshen',en:"Yes, that's right."},
        {role:'Shenshen',en:'I can put the box on the desk.'},
        {role:'Mum',en:'Please put it under the bed.'}
      ],
      song: "I put my books\nOn the desk.\n\nI put my toys\nIn the box.\n\nMy room is tidy.\nI like it very much.",
      story: {title:'My tidy room',lines:[
        {role:'Shenshen',en:'Look at my room!'},
        {role:'Shenshen',en:'I put the book on the desk.'},
        {role:'Shenshen',en:'I put the ball in the box.'},
        {role:'Shenshen',en:'I put the bag on the chair.'},
        {role:'Shenshen',en:'My room is tidy!'},
        {role:'Mum',en:'Well done!'}
      ]},
      miniProject: {title:'My tidy room',steps:[
        'Stick the things in the right place.',
        'Show and tell.',
        'I put ... in / on / under ...',
        'My room is tidy. I like my room.'
      ]}
    },
    {
      unit: 3,
      title: 'On the Way',
      titleZh: '在路上',
      words: ['car','bus','bicycle','walk','school'],
      sentences: [
        {en:'How do you go to school?', zh:'你怎么去学校？'},
        {en:'I go to school by bus.', zh:'我坐公共汽车去学校。'},
        {en:'I go by car.', zh:'我坐小汽车去。'},
        {en:'I ride a bicycle.', zh:'我骑自行车。'},
        {en:'I walk to school.', zh:'我走路去学校。'}
      ],
      chant: "Going to school\n\nIn the morning,\nWe go to school.\nHow do you go?\nHow do you go?\nGo by car? No, no, no.\nGo on foot? OK. Let's go!",
      dialogue: [
        {role:'Lily',en:'Hi, Shenshen, how are you?'},
        {role:'Shenshen',en:'Look, your postcard!'},
        {role:'Lily',en:"Oh, that's great!"},
        {role:'Shenshen',en:'I love this red bus.'},
        {role:'Lily',en:'Yes, you can see it in London.'},
        {role:'Shenshen',en:"But what's this?"},
        {role:'Lily',en:"Oh, it's the London Underground."},
        {role:'Shenshen',en:'Underground?'},
        {role:'Lily',en:'Yes, you use "metro" in Shanghai.'},
        {role:'Shenshen',en:'Haha, I see.'}
      ],
      story: {title:'A postcard from London',lines:[
        {role:'Lily',en:'Hi, Shenshen, how are you?'},
        {role:'Shenshen',en:'Look, your postcard!'},
        {role:'Lily',en:"Oh, that's great!"},
        {role:'Shenshen',en:'I love this red bus.'},
        {role:'Lily',en:'Yes, you can see it in London.'},
        {role:'Shenshen',en:"But what's this?"},
        {role:'Lily',en:"Oh, it's the London Underground."},
        {role:'Shenshen',en:'Underground?'},
        {role:'Lily',en:'Yes, you use "metro" in Shanghai.'},
        {role:'Shenshen',en:'Haha, I see.'}
      ]},
      miniProject: {title:'My bookmark',steps:[
        'Think and choose.',
        'Make your bookmark: Draw, Colour, Cut.',
        'Show and tell: This is a ... I love this ... I go ... by ...',
        'Well done!'
      ]}
    },
    {
      unit: 4,
      title: 'Sports',
      titleZh: '体育运动',
      words: ['football','basketball','ping-pong','run','jump','play'],
      sentences: [
        {en:"Let's play football!", zh:'我们踢足球吧！'},
        {en:'She plays basketball.', zh:'她打篮球。'},
        {en:'He plays ping-pong.', zh:'他打乒乓球。'},
        {en:'I can run fast!', zh:'我跑得快！'},
        {en:'I can jump high!', zh:'我跳得高！'},
        {en:'Well done!', zh:'做得好！'}
      ],
      chant: "Here we go.\nDo our best.\nRun and jump.\nRun and jump.\nPlay ping-pong.\nPlay basketball.\nPlay football.\nWe are the best.",
      dialogue: [
        {role:'A',en:"Let's play football."},
        {role:'B',en:'Great! We should do a warm-up.'},
        {role:'A',en:"Oh, no! The ball's out."},
        {role:'B',en:'Try again!'},
        {role:'A',en:'Well done!'},
        {role:'B',en:'Thank you.'}
      ],
      story: {title:'Playing sports',lines:[
        {role:'A',en:"Let's play football."},
        {role:'B',en:'Great! We should do a warm-up.'},
        {role:'A',en:'I can run fast!'},
        {role:'B',en:'I can jump high!'},
        {role:'A',en:"Oh, no! The ball's out."},
        {role:'B',en:'Try again! Well done!'}
      ]},
      miniProject: {title:'A sports board game',steps:[
        'Play the board game with your friend.',
        'I can run. / Let\'s play. / We should ...',
        'Well done!'
      ]}
    },
    {
      unit: 5,
      title: 'In the Sky',
      titleZh: '在天空中',
      words: ['sun','moon','star','cloud','sky'],
      sentences: [
        {en:'I see the sun in the sky.', zh:'我看见天空中的太阳。'},
        {en:'I see white clouds.', zh:'我看见白云。'},
        {en:'The moon is round.', zh:'月亮圆圆的。'},
        {en:'I see many stars.', zh:'我看见很多星星。'},
        {en:"Where's Mr Sun?", zh:'太阳先生在哪里？'},
        {en:"He's behind me.", zh:'他在我后面。'}
      ],
      song: "Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.\nTwinkle, twinkle, little star,\nHow I wonder what you are!",
      dialogue: [
        {role:'Rita',en:'The sun is high in the sky.'},
        {role:'Rita',en:'Hey, Mr Sun!'},
        {role:'Mr Sun',en:'Good afternoon, Rita.'},
        {role:'Rita',en:'The moon comes out.'},
        {role:'Rita',en:"Where's Mr Sun?"},
        {role:'Mr Sun',en:'He goes down at night. Good night, Rita.'},
        {role:'Rita',en:'Good night.'}
      ],
      story: {title:'Rita and Mr Sun',lines:[
        {role:'Rita',en:'Good morning, my friend.'},
        {role:'Mr Sun',en:'Good morning!'},
        {role:'Rita',en:"Miss Cloud, where's Mr Sun?"},
        {role:'Miss Cloud',en:"He's behind me."},
        {role:'Mr Sun',en:'Here I am!'},
        {role:'Rita',en:'I see the sun! Good morning, Mr Sun!'}
      ]},
      miniProject: {title:'My sky log',steps:[
        'Look up to the sky. What is in the sky?',
        'Think and draw. My sky log. Day / Night.',
        'Show and tell: ... is/are in the sky. It\'s/They\'re ...',
        'Well done!'
      ]}
    },
    {
      unit: 6,
      title: 'In the Sea',
      titleZh: '在海洋里',
      words: ['seahorse','dolphin','clownfish','sea','swim'],
      sentences: [
        {en:'What do you see in the sea?', zh:'你在海里看见什么？'},
        {en:'I see a seahorse.', zh:'我看见一只海马。'},
        {en:'I see a dolphin.', zh:'我看见一只海豚。'},
        {en:'I see a clownfish.', zh:'我看见一条小丑鱼。'},
        {en:'I can swim in the sea.', zh:'我能在海里游泳。'}
      ],
      chant: "Swim in the sea.\nSwim in the sea.\nWhat do you see\nIn the blue sea?\n\nI see a seahorse.\nI see a dolphin,\nAnd a clownfish\nIn the blue sea.",
      dialogue: [
        {role:'A',en:'What do you see in the sea?'},
        {role:'B',en:'I see a seahorse!'},
        {role:'A',en:'What do you see?'},
        {role:'C',en:'I see a dolphin!'},
        {role:'A',en:'What about you?'},
        {role:'D',en:'I see a clownfish!'}
      ],
      story: {title:'Little seahorses',lines:[
        {role:'Mama',en:'What a nice place!'},
        {role:'Mama',en:'Let me lay my eggs.'},
        {role:'Papa',en:'Oh, my babies.'},
        {role:'Papa',en:'I like swimming far away.'},
        {role:'Papa',en:'I like moving up and down.'},
        {role:'Papa',en:'My dear babies, goodbye.'},
        {role:'Babies',en:'Goodbye, Papa. We love you.'},
        {role:'Baby',en:'Hello, Clownfish! I like playing hide-and-seek in the sea.'},
        {role:'Clownfish',en:'Great! Let\'s play together.'}
      ]},
      miniProject: {title:'My sea-animal hat',steps:[
        'Draw and make: Draw, Colour, Cut.',
        'Act and speak: I am a/an ... I like ... in the sea.',
        'Well done!'
      ]}
    },
    {
      unit: 7,
      title: 'Seasons',
      titleZh: '季节',
      words: ['spring','summer','autumn','winter','warm','hot','cool','cold'],
      sentences: [
        {en:"It's spring. It's warm.", zh:'春天了。天气温暖。'},
        {en:"It's summer. It's hot.", zh:'夏天了。天气很热。'},
        {en:"It's autumn. It's cool.", zh:'秋天了。天气凉爽。'},
        {en:"It's winter. It's cold.", zh:'冬天了。天气很冷。'}
      ],
      song: "Spring, spring,\nPretty flowers, pretty flowers.\nSummer, summer,\nBig trees, big trees.\nAutumn, autumn,\nYummy fruit, yummy fruit.\nWinter, winter,\nWhite snow, white snow.",
      dialogue: [
        {role:'A',en:"It's spring. It's warm."},
        {role:'B',en:'I see flowers!'},
        {role:'A',en:"It's summer. It's hot."},
        {role:'B',en:"Let's rest under the tree."},
        {role:'A',en:"It's autumn. It's cool."},
        {role:'B',en:'I eat yummy fruit.'},
        {role:'A',en:"It's winter. It's cold."},
        {role:'B',en:'I play with the snow!'}
      ],
      story: {title:'The little apple tree',lines:[
        {role:'Tree',en:"It's spring. It's warm."},
        {role:'Tree',en:'Look! I have white flowers.'},
        {role:'Bird',en:'I can smell the flowers.'},
        {role:'Tree',en:'Summer is coming. It\'s hot.'},
        {role:'Tree',en:'I have many green leaves.'},
        {role:'Bird',en:'Let me have a rest.'},
        {role:'Tree',en:"It's autumn. I have red apples!"},
        {role:'Bird',en:'Yummy! I taste the apples.'},
        {role:'Tree',en:"It's winter. It's cold."},
        {role:'Tree',en:'I have no leaves. I sleep.'}
      ]},
      miniProject: {title:'Seasons bingo',steps:[
        'Play a seasons bingo game with friends.',
        'Say: It\'s spring / summer / autumn / winter. It\'s warm / hot / cool / cold.'
      ]}
    },
    {
      unit: 8,
      title: 'Yummy Fruit',
      titleZh: '水果',
      words: ['apple','pear','orange','banana','grape','fruit','sweet'],
      sentences: [
        {en:'I love fruit!', zh:'我喜欢水果！'},
        {en:'What do you need?', zh:'你需要什么？'},
        {en:'I need an apple.', zh:'我需要一个苹果。'},
        {en:'I need a banana.', zh:'我需要一根香蕉。'},
        {en:'Grapes are purple.', zh:'葡萄是紫色的。'},
        {en:'The pear is sweet.', zh:'梨是甜的。'}
      ],
      chant: "Apple apple, red and sweet.\nPear pear, yellow to eat.\nOrange orange, juicy and bright.\nBanana banana, take a bite!",
      dialogue: [
        {role:'A',en:'I love fruit!'},
        {role:'B',en:'What do you need?'},
        {role:'A',en:'I need an apple.'},
        {role:'B',en:'Here you are.'},
        {role:'A',en:'Thank you!'},
        {role:'C',en:'I need a banana.'},
        {role:'D',en:'Grapes are purple.'},
        {role:'A',en:'The pear is sweet. Yummy!'}
      ],
      story: {title:'Fruit day',lines:[
        {role:'Mum',en:'Let\'s buy some fruit!'},
        {role:'Shenshen',en:'I love fruit!'},
        {role:'Shenshen',en:'I need an apple. It\'s red.'},
        {role:'Shenshen',en:'I need a banana. It\'s yellow.'},
        {role:'Shenshen',en:'I taste the grape. It\'s sweet!'},
        {role:'Mum',en:'What about the pear?'},
        {role:'Shenshen',en:'The pear is sweet too. Yummy!'}
      ]},
      miniProject: {title:'My fruit plate',steps:[
        'Choose. (I like apples.)',
        'Stick.',
        'Show and tell: Look! This is my fruit plate. I have ...'
      ]}
    },
    {
      unit: 9,
      title: 'The Five Senses',
      titleZh: '五种感官',
      words: ['see','hear','smell','taste','touch'],
      sentences: [
        {en:'I see with my eyes.', zh:'我用眼睛看。'},
        {en:'I hear with my ears.', zh:'我用耳朵听。'},
        {en:'I smell with my nose.', zh:'我用鼻子闻。'},
        {en:'I taste with my mouth.', zh:'我用嘴巴尝。'},
        {en:'I touch with my hands.', zh:'我用双手触摸。'}
      ],
      song: "In the park.\nI smell the flowers\nUnder the trees.\nI taste the fruit\nIn the breeze.\nI touch the grass,\nSoft and green.\nI see the lake,\nBlue and clean.\nI hear the birds\nSinging around.\nWhat a wonderful world!",
      dialogue: [
        {role:'A',en:'I see with my eyes.'},
        {role:'B',en:'I hear with my ears.'},
        {role:'A',en:'I smell with my nose.'},
        {role:'B',en:'I taste with my mouth.'},
        {role:'A',en:'I touch with my hands.'},
        {role:'B',en:'Five senses!'}
      ],
      story: {title:'Fun in the rain',lines:[
        {role:'Child',en:"What's falling, Mummy?"},
        {role:'Mum',en:'Oh, I see raindrops.'},
        {role:'Child',en:'And I touch them.'},
        {role:'Mum',en:'What do you hear, dear?'},
        {role:'Child',en:'Pitter-patter! Pitter-patter!'},
        {role:'Child',en:'I hear raindrops.'},
        {role:'Child',en:'La! La! La! I like rainy days.'}
      ]},
      miniProject: {title:'Talking about the five senses',steps:[
        'Think and choose.',
        'Draw the fruit, tick the senses.',
        'Show and tell: I see / smell / touch / taste ... It\'s ...',
        'Well done!'
      ]}
    },
    {
      unit: 10,
      title: 'This Is Me',
      titleZh: '这是我',
      words: ['draw','read','sing','dance','picture','friend'],
      sentences: [
        {en:'Look at me!', zh:'看我！'},
        {en:'I can draw a picture.', zh:'我会画画。'},
        {en:'I can read a book.', zh:'我会读书。'},
        {en:'I can sing.', zh:'我会唱歌。'},
        {en:'I can dance.', zh:'我会跳舞。'},
        {en:'I love my friends.', zh:'我爱我的朋友们。'},
        {en:'This is me!', zh:'这就是我！'}
      ],
      dialogue: [
        {role:'A',en:'Hello! What makes you special?'},
        {role:'B',en:'I can make breakfast for my family!'},
        {role:'A',en:'Really? Super!'},
        {role:'C',en:'Look at me. I can do kung fu!'},
        {role:'A',en:'Wow! Cool!'},
        {role:'D',en:'I can take care of my dog!'},
        {role:'A',en:"You're a great girl!"},
        {role:'All',en:'Everyone is special.'}
      ],
      song: "Look at me. Look at me.\nI can run. I can jump.\nI love drawing pictures.\nI love reading books.\nThis is me. This is me.",
      story: {title:'I am special',lines:[
        {role:'Shenshen',en:'Look at me!'},
        {role:'Shenshen',en:'I can draw a picture.'},
        {role:'Shenshen',en:'I can read a book.'},
        {role:'Shenshen',en:'I can sing and dance!'},
        {role:'Shenshen',en:'I love my friends.'},
        {role:'Friends',en:'We love you too!'},
        {role:'All',en:'Everyone is special!'}
      ]},
      miniProject: {title:'A mini-book about me',steps:[
        'Think and draw a picture of yourself.',
        'Show and tell: Look at me. My name is ... I can ... I am ...',
        'Well done!'
      ]}
    }
  ]
};
