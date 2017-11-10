(function (){

  angular
    .module('appModule')
    .controller("AppModuleController", AppModuleController);

  AppModuleController.$inject = [
    "AppService",
    "$scope"
  ];

  function AppModuleController(AppService, $scope){
    var vm = this;

    vm.text = [
      {
        title: "极端天气",
        content: "1788年春法国遭遇旱灾，同年冬天法国极端严寒，导致法国大革命前夕面包价格的大幅上涨。1788年贫户的家庭一半收入花费在面包上，1789年则达到80%。商品滞销，农民涌入城市造成高失业率，使得社会开始动荡不安......",
        path: "1",
        imageTitle: "贫苦的农民"
      },
      {
        title: "启蒙运动",
        content: "启蒙时代带来了对专制王权的愤恨；知识分子和商人对贵族特权和统治的愤恨；农民、工人以及资产阶级对传统贵族领主特权的愤恨，民众对神职特权者的愤恨和对宗教自由的渴望，对自由以及共和制度（尤其是随着革命深入发展）的渴望。",
        path: "2",
        imageTitle: "1755年《若弗兰夫人的沙龙》,雷蒙尼耶作。在座者有孟德斯鸠、卢梭、达朗贝尔、爱尔维修、拉莫等。"
      },
      {
        title: "经济危机",
        content: "路易十六继位时正值法国爆发经济危机；国家几近破产，入不敷出。出生于瑞士日内瓦的雅克·内克尔继任为财政总监，他意识到，国家在税收责任分摊问题上存在不公平，他试图改革，国王却否决内克尔的提案，并将他撤除，此事严重损害政府公信力。",
        path: "3",
        imageTitle: "讽刺漫画。路易十六问，我收的税都去哪儿了？"
      },
      {
        title: "三级会议",
        content: "贵族阶级希望推行宪政改革，以及任何加税行为必需由三级会议通过，国王不得任意逮捕或拘禁人民等，又计划在1789年5月召开三级会议。三级会议最初的安排是在等级上分为三级，分别为教士、贵族及平民，每一级都有一票，这样其余两个等级都能否决第三个等级的决定。",
        path: "4",
        imageTitle: "讽刺三级制度的漫画"
      },
      {
        title: "三级会议",
        content: "自由派的贵族和教士编写的小册子在出版管制暂停后如潮水般涌现并广泛传播。西哀士在当年1月出版的小册子《第三等级是什么？》中提出：'第三等级是什么?是一切，是整个国家；第三等级在政治秩序中的地位是什么?什么也不是；第三等级要求什么?要求取得某种地位。'",
        path: "5",
        imageTitle: "埃马纽埃尔-约瑟夫·西哀士"
      },
      {
        title: "三级会议",
        content: "1789年5月5日三级会议在凡尔赛举行，会议刚开始就陷入僵局，第三等级的基本战术是要求所有决议必须由三个等级公开讨论决定，因此他们要求参会代表的身份确认必须要公开进行，而不是仅在各自的等级群体里完成。教士等级宣称需要更多时间完成，遭到民众反驳。",
        path: "6",
        imageTitle: "凡尔赛三级会议"
      },
      {
        title: "国民议会",
        content: "1789年6月10日，埃马纽埃尔提出由第三等级自行为与会者认证，并邀请另外两个阶级参加。他们籍投票作出一个意义深远决定，他们自称为“国民议会”，一个不是为国家而是为“人民”服务的议会。他们转到附近一个室内网球场。1789年6月20日在室内网球场内他们发表《网球场宣言》，宣称国民会议会续存至法国宪法建立为止。",
        path: "7",
        imageTitle: "网球场会议"
      },
      {
        title: "国民议会",
        content: "第三等级的代表们发誓将继续开会，不制定法国宪法决不解散。除一名代表拒绝签字外，其余576名代表都在誓言上签字。这是一次革命性的行动，它向世人表明，政治权利属于人民及其代表而非君主。",
        path: "8",
        imageTitle: "网球场宣言"
      },
      {
        title: "巴士底狱",
        content: "内克尔因靠近第三等级而惹祸上身。国王解雇他，并同时重组财政部。不少巴黎市民认为路易的行动是皇室对议会开始干预的第一步，因此消息传出后第二天巴黎开始出现暴动。巴黎很快就陷入暴乱，暴动市民受到法国卫兵的支持。7月14日，叛军盯上巴士底监狱里的武器和弹药库存。巴士底狱因此被当作是法国封建制度的象征。经过数小时的战斗，巴士底狱于当天下午被攻陷。",
        path: "9",
        imageTitle:"人民攻陷巴士底狱"
      },
      {
        title: "人权宣言",
        content: "人民主权论开始向全国散播。在农村地区，人们参与烧毁地契等的“大恐慌”活动。凡尔赛的动荡使得失业率大幅度上升，各种谣言在社会中散布。当年8月26日，国民制宪议会发布《人权宣言》。人权宣言，宣布自由、财产、安全和反抗压迫是天赋不可剥夺的人权；肯定了言论、信仰、著作和出版自由，阐明了司法、行政、立法三权分立、法律面前人人平等、私有财产神圣不可侵犯等原则。",
        path: "10",
        imageTitle:"人权宣言"
      },
      {
        title: "宗教权力",
        content: "按照旧制度，天主教会是法国单一最大土地所有者。教会可以豁免对政府的税项，同时它还对一般市民征收十一税（收入的10%的税项，通常以谷物的形式征收）。11月2日，国民议会宣布教会的财产“由国家处置”。他们利用这笔财产作为担保发行一种新货币：指券。从此国家需肩负起教会的职责，这包括支付教士薪水和照顾穷人、病人及婴儿。1790年2月13日，所有宗教体系被废除。修士和修女被劝谕回到平民生活并最终有部分人结婚。",
        path: "11",
        imageTitle:"教士和修女在1790年2月16日颁布新法令后庆祝他们的新的自由"
      },
      {
        title: "三权分立",
        content: "1790年6月，制宪议会废除了亲王、世袭贵族、封爵头衔，并且重新划分政区。成立大理院、最高法院、建立陪审制度。制宪议会还没收教会财产，宣布法国教会脱离罗马教皇统治而归国家管理。1791年9月制宪议会制定一部以“一切政权由全民产生”、三权分立的宪法，规定行政权属于国王、立法权属于立法会议，司法权属各级法院。9月30日制宪议会解散，10月1日立法议会召开。法国成为君主立宪国家。",
        path: "12",
        imageTitle:"1790年10月1日立法议会"
      },
      {
        title: "推翻君主立宪制",
        content: "法国大革命引起周边国家不安，普鲁士、奥地利成立联军攻打法国。由于路易十六的王后、奥地利皇帝的妹妹玛丽·安东尼特泄露军事机密给联军，使法国军队被打败，联军攻入法国。1792年7月11日立法议会宣布祖国处于危急中。巴黎人民再次掀起共和运动的高潮。雅各宾派领袖罗伯斯比尔、马拉、丹敦带领反君主制运动，于8月10日攻占国王住宅杜伊勒里宫，拘禁国王、王后，打倒波旁王朝，推翻君主立宪派的统治。",
        path: "13",
        imageTitle:"1792年 巴黎市民攻下皇宫"
      },
      {
        title: "二次革命",
        content: "1793年2月，普鲁士、奥地利、西班牙、荷兰、萨丁尼亚、汉诺威、英国成立反法同盟，对法国进行武装干涉。然而吉伦特派无力抵抗外国军队，巴黎人民于5月31日－6月2日发动第二次起义，推翻吉伦特派的统治，建立起雅各宾专政。",
        path: "14",
        imageTitle:"1793年6月2日，到国民大会逮捕吉伦特派"
      },
      {
        title: "恐怖时代",
        content: "“雅各宾专政”，又称“恐怖时代”，是雅各宾派领袖罗伯斯比尔的专制独裁统治。1793年底至1794年初将外国干涉军全部赶出国土，国内叛乱也基本平息。1791年－1794年雅各宾派专政期间，巴黎设置断头台，三年内被斩首的“反革命份子”，达7万人之多，国王路易十六，玛丽·安托瓦内特，大多数吉伦特派的国民公会代表，以及其他的如定量化学分析开拓者安托万·拉瓦锡，都在它的剃刀下失去了生命。",
        path: "15",
        imageTitle:"断头台"
      },
      {
        title: "热月政变",
        content: "1794年6月到7月，压制的速度在加快，造成恐怖统治期间一小段名为”大恐怖”的时期，最终，在1794年 7月27日(共和历II年热月 9日)导致热月政变而结束。 包括安东万·路易·德·圣茹斯特和马克西米连·罗伯斯庇尔，总共二十一名在当日被处决。",
        path: "16",
        imageTitle:"马克西米连·罗伯斯庇尔遭到处决"
      },
      {
        title: "共和国的结束及拿破仑时代",
        content: "热月党人于1795年解散国会，成立新的政府机构督政府。恐怖时期结束，但政局仍然不稳。"+
                 "1796年督政府派拿破仑·波拿巴远征意大利取得重大胜利，军人势力开始抬头。1797年立法机构选举时，许多保皇党分子当选，督政府为打击保皇党势力，宣布选举无效。"+
                 "1799年11月9日（共和八年雾月18日）拿破仑发动雾月政变，结束督政府的统治，建立执政府，自任执政。法国大革命结束，开始拿破仑时代。",
        path: "17",
        imageTitle:"拿破仑加冕"
      },

    ];

    vm.currentIndex = 0;
    vm.currentTitle = vm.text[vm.currentIndex].title;
    vm.currentText = vm.text[vm.currentIndex].content;
    vm.currentImgPath = vm.text[vm.currentIndex].path;
    vm.currentImageTitle = vm.text[vm.currentIndex].imageTitle;

    vm.changePart = function(index){
      vm.currentIndex = index;
      changeContent(vm, $scope);


    }

    setInterval(function(){
      if(vm.currentIndex < 16){
        vm.currentIndex += 1;
      }

      changeContent(vm, $scope);
    }, 3000);

  }

  function changeContent(vm, $scope){
      vm.currentTitle = vm.text[vm.currentIndex].title;
      vm.currentText = vm.text[vm.currentIndex].content;
      vm.currentImgPath = vm.text[vm.currentIndex].path;
      vm.currentImageTitle = vm.text[vm.currentIndex].imageTitle;

      for(var i = 0;i < 4;i++){
        document.getElementsByClassName("footer-title")[i].className = "footer-title";
      }

      if(vm.currentIndex <= 6){
        document.getElementsByClassName("footer-title")[0].className = "footer-title active";
      }
      if(vm.currentIndex > 6 && vm.currentIndex < 13){
        document.getElementsByClassName("footer-title")[1].className = "footer-title active";
      }else if(vm.currentIndex < 15 && vm.currentIndex >= 13){
        document.getElementsByClassName("footer-title")[2].className = "footer-title active";
      }else if(vm.currentIndex == 15){
        document.getElementsByClassName("footer-title")[3].className = "footer-title active";
      }

      $scope.$apply();
  }


})();
