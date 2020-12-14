const getIcCity = (codeMelli) => {
  const e = codeMelli.substr(0, 3);
  if ('169' == e) return 'استان آذربایجان شرقی - شهر آذر شهر';
  if ('170' == e) return 'استان آذربایجان شرقی - شهر اسکو';
  if (!('149' != e && '150' != e)) return 'استان آذربایجان شرقی - شهر اهر';
  if ('171' == e) return 'استان آذربایجان شرقی - شهر بستان آباد';
  if ('168' == e) return 'استان آذربایجان شرقی - شهر بناب';
  if (!('136' != e && '137' != e && '138' != e)) return 'استان آذربایجان شرقی - شهر تبریز';
  if ('545' == e) return 'استان آذربایجان شرقی - شهر ترکمانچای';
  if ('505' == e) return 'استان آذربایجان شرقی - شهر جلفا';
  if ('636' == e) return 'استان آذربایجان شرقی - شهر چاروایماق';
  if (!('164' != e && '165' != e)) return 'استان آذربایجان شرقی - شهر سراب';
  if ('172' == e) return 'استان آذربایجان شرقی - شهر شبستر';
  if ('623' == e) return 'استان آذربایجان شرقی - شهر صوفیان';
  if ('506' == e) return 'استان آذربایجان شرقی - شهر عجب شیر';
  if ('519' == e) return 'استان آذربایجان شرقی - شهر کلیبر';
  if (!('154' != e && '155' != e)) return 'استان آذربایجان شرقی - شهر مراغه';
  if ('567' == e) return 'استان آذربایجان شرقی - شهر ورزقان';
  if ('173' == e) return 'استان آذربایجان شرقی - شهر هریس';
  if (!('159' != e && '160' != e)) return 'استان آذربایجان شرقی - شهر هشترود';
  if ('604' == e) return 'استان آذربایجان شرقی - شهر هوراند';
  if (!('274' != e && '275' != e)) return 'استان آذربایجان غربی - شهر ارومیه';
  if ('295' == e) return 'استان آذربایجان غربی - شهر اشنویه';
  if ('637' == e) return 'استان آذربایجان غربی - شهر انزل';
  if ('292' == e) return 'استان آذربایجان غربی - شهر بوکان';
  if ('492' == e) return 'استان آذربایجان غربی - شهر پلدشت';
  if ('289' == e) return 'استان آذربایجان غربی - شهر پیرانشهر';
  if ('677' == e) return 'استان آذربایجان غربی - شهر  تخت سلیمان';
  if ('294' == e) return 'استان آذربایجان غربی - شهر تکاب';
  if ('493' == e) return 'استان آذربایجان غربی - شهر چایپاره';
  if (!('279' != e && '280' != e)) return 'استان آذربایجان غربی - شهر خوی';
  if ('288' == e) return 'استان آذربایجان غربی - شهر سردشت';
  if (!('284' != e && '285' != e)) return 'استان آذربایجان غربی - شهر سلماس';
  if ('638' == e) return 'استان آذربایجان غربی - شهر سیلوانه';
  if ('291' == e) return 'استان آذربایجان غربی - شهر سیه چشمه(چالدران)';
  if ('640' == e) return 'استان آذربایجان غربی - شهر شوط';
  if ('293' == e) return 'استان آذربایجان غربی - شهر  شاهین دژ';
  if ('675' == e) return 'استان آذربایجان غربی - شهر کشاورز';
  if (!('282' != e && '283' != e)) return 'استان آذربایجان غربی - شهر ماکو';
  if (!('286' != e && '287' != e)) return 'استان آذربایجان غربی - شهر مهاباد';
  if (!('296' != e && '297' != e)) return 'استان آذربایجان غربی - شهر میاندوآب';
  if ('290' == e) return 'استان آذربایجان غربی - شهر نقده';
  if (!('400' != e && '401' != e)) return 'استان همدان - شهر اسدآباد';
  if (!('404' != e && '405' != e)) return 'استان همدان - شهر بهار';
  if ('397' == e) return 'استان همدان - شهر تویسرکان';
  if (!('398' != e && '399' != e)) return 'استان همدان - شهر رزن';
  if ('647' == e) return 'استان همدان - شهر شراء و پیشخوار';
  if ('502' == e) return 'استان همدان - شهر فامنین';
  if ('584' == e) return 'استان همدان - شهر قلقل رود';
  if (!('402' != e && '403' != e)) return 'استان همدان - شهر کبودرآهنگ';
  if (!('392' != e && '393' != e)) return 'استان همدان - شهر ملایر';
  if (!('395' != e && '396' != e)) return 'استان همدان - شهر نهاوند';
  if (!('386' != e && '387' != e)) return 'استان همدان - شهر همدان';
  if ('503' == e) return 'استان یزد - شهر ابرکوه';
  if ('444' == e) return 'استان یزد - شهر اردکان';
  if ('551' == e) return 'استان یزد - شهر اشکذر';
  if ('447' == e) return 'استان یزد - شهر بافق';
  if ('561' == e) return 'استان یزد - شهر بهاباد';
  if ('445' == e) return 'استان یزد - شهر تفت';
  if ('718' == e) return 'استان یزد - شهر دستگردان';
  if ('083' == e) return 'استان یزد - شهر طبس';
  if ('446' == e) return 'استان یزد - شهر مهریز';
  if ('448' == e) return 'استان یزد - شهر میبد';
  if ('552' == e) return 'استان یزد - شهر نیر';
  if ('543' == e) return 'استان یزد - شهر هرات و مروست';
  if (!('442' != e && '443' != e)) return 'استان یزد - شهر یزد';
  if ('051' == e) return 'استان مرکزی - شهر آشتیان';
  if (!('052' != e && '053' != e)) return 'استان مرکزی - شهر اراک';
  if ('058' == e) return 'استان مرکزی - شهر تفرش';
  if ('055' == e) return 'استان مرکزی - شهر خمین';
  if ('617' == e) return 'استان مرکزی - شهر خنداب';
  if ('057' == e) return 'استان مرکزی - شهر دلیجان';
  if ('618' == e) return 'استان مرکزی - شهر  زرند مرکزی';
  if (!('059' != e && '060' != e)) return 'استان مرکزی - شهر  ساوه';
  if (!('061' != e && '062' != e)) return 'استان مرکزی - شهر سربند';
  if ('544' == e) return 'استان مرکزی - شهر فراهان';
  if ('056' == e) return 'استان مرکزی - شهر محلات';
  if ('571' == e) return 'استان مرکزی - شهر وفس';
  if ('593' == e) return 'استان مرکزی - شهر هندودر';
  if ('667' == e) return 'استان هرمزگان - شهر ابوموسی';
  if ('348' == e) return 'استان هرمزگان - شهر بستک';
  if ('586' == e) return 'استان هرمزگان - شهر بشاگرد';
  if (!('338' != e && '339' != e)) return 'استان هرمزگان - شهر بندرعباس';
  if (!('343' != e && '344' != e)) return 'استان هرمزگان - شهر بندرلنگه';
  if ('346' == e) return 'استان هرمزگان - شهر جاسک';
  if ('337' == e) return 'استان هرمزگان - شهر  حاجی آباد';
  if ('554' == e) return 'استان هرمزگان - شهر خمیر';
  if ('469' == e) return 'استان هرمزگان - شهر رودان';
  if ('537' == e) return 'استان هرمزگان - شهر فین';
  if ('345' == e) return 'استان هرمزگان - شهر قشم';
  if ('470' == e) return 'استان هرمزگان - شهر گاوبندی';
  if (!('341' != e && '342' != e)) return 'استان هرمزگان - شهر میناب';
  if (!('483' != e && '484' != e)) return 'استان لرستان - شهر ازنا';
  if ('557' == e) return 'استان لرستان - شهر  اشترینان';
  if ('418' == e) return 'استان لرستان - شهر الشتر';
  if (!('416' != e && '417' != e)) return 'استان لرستان - شهر الیگودرز';
  if (!('412' != e && '413' != e)) return 'استان لرستان - شهر بروجرد';
  if ('592' == e) return 'استان لرستان - شهر پاپی';
  if ('612' == e) return 'استان لرستان - شهر چغلوندی';
  if ('613' == e) return 'استان لرستان - شهر چگنی';
  if (!('406' != e && '407' != e)) return 'استان لرستان - شهر خرم آباد';
  if ('421' == e) return 'استان لرستان - شهر دورود';
  if ('598' == e) return 'استان لرستان - شهر  رومشکان';
  if ('419' == e) return 'استان لرستان - شهر کوهدشت';
  if ('385' == e) return 'استان لرستان - شهر  ملاوی(پلدختر)';
  if ('420' == e) return 'استان لرستان - شهر  نورآباد(دلفان)';
  if ('528' == e) return 'استان لرستان - شهر ویسیان';
  if (!('213' != e && '214' != e)) return 'استان مازندران - شهر آمل';
  if (!('205' != e && '206' != e)) return 'استان مازندران - شهر بابل';
  if ('498' == e) return 'استان مازندران - شهر بابل';
  if ('568' == e) return 'استان مازندران - شهر بندپی';
  if ('711' == e) return 'استان مازندران - شهر بندپی شرقی';
  if (!('217' != e && '218' != e)) return 'استان مازندران - شهر بهشهر';
  if ('221' == e) return 'استان مازندران - شهر تنکابن';
  if ('582' == e) return 'استان مازندران - شهر جویبار';
  if ('483' == e) return 'استان مازندران - شهر چالوس';
  if ('625' == e) return 'استان مازندران - شهر چمستان';
  if ('576' == e) return 'استان مازندران - شهر چهاردانگه';
  if ('578' == e) return 'استان مازندران - شهر دودانگه';
  if ('227' == e) return 'استان مازندران - شهر رامسر';
  if (!('208' != e && '209' != e)) return 'استان مازندران - شهر ساری';
  if ('225' == e) return 'استان مازندران - شهر سوادکوه';
  if ('577' == e) return 'استان مازندران - شهر شیرگاه';
  if ('712' == e) return 'استان مازندران - شهر  عباس آباد';
  if (!('215' != e && '216' != e)) return 'استان مازندران - شهر قائمشهر';
  if ('626' == e) return 'استان مازندران - شهر کجور';
  if ('627' == e) return 'استان مازندران - شهر کلاردشت';
  if ('579' == e) return 'استان مازندران - شهر گلوگاه';
  if ('713' == e) return 'استان مازندران - شهر میاندورود';
  if ('499' == e) return 'استان مازندران - شهر نکاء';
  if ('222' == e) return 'استان مازندران - شهر نور';
  if (!('219' != e && '220' != e)) return 'استان مازندران - شهر نوشهر';
  if (!('500' != e && '501' != e)) return 'استان مازندران - شهر  هراز و محمودآباد';
  if ('623' == e) return 'استان گلستان - شهر آزادشهر';
  if ('497' == e) return 'استان گلستان - شهر  آق قلا';
  if ('223' == e) return 'استان گلستان - شهر بندرترکمن';
  if ('689' == e) return 'استان گلستان - شهر بندرگز';
  if ('487' == e) return 'استان گلستان - شهر رامیان';
  if ('226' == e) return 'استان گلستان - شهر  علی آباد';
  if ('224' == e) return 'استان گلستان - شهر کردکوی';
  if ('386' == e) return 'استان گلستان - شهر کلاله';
  if (!('211' != e && '212' != e)) return 'استان گلستان - شهر گرگان';
  if ('628' == e) return 'استان گلستان - شهر گمیشان';
  if (!('202' != e && '203' != e)) return 'استان گلستان - شهر  گنبد کاووس';
  if ('531' == e) return 'استان گلستان - شهر  مراوه تپه';
  if ('288' == e) return 'استان گلستان - شهر مینودشت';
  if ('261' == e) return 'استان گیلان - شهر آستارا';
  if ('273' == e) return 'استان گیلان - شهر آستانه';
  if ('630' == e) return 'استان گیلان - شهر املش';
  if ('264' == e) return 'استان گیلان - شهر  بندرانزلی';
  if ('518' == e) return 'استان گیلان - شهر خمام';
  if ('631' == e) return 'استان گیلان - شهر  رحیم آباد';
  if (!('258' != e && '259' != e)) return 'استان گیلان - شهر رشت';
  if ('570' == e) return 'استان گیلان - شهر رضوانشهر';
  if ('265' == e) return 'استان گیلان - شهر رودبار';
  if (!('268' != e && '269' != e)) return 'استان گیلان - شهر رودسر';
  if ('653' == e) return 'استان گیلان - شهر سنگر';
  if ('517' == e) return 'استان گیلان - شهر سیاهکل';
  if ('569' == e) return 'استان گیلان - شهر شفت';
  if ('267' == e) return 'استان گیلان - شهر  صومعه سرا';
  if (!('262' != e && '263' != e)) return 'استان گیلان - شهر طالش';
  if ('593' == e) return 'استان گیلان - شهر عمارلو';
  if ('266' == e) return 'استان گیلان - شهر فومن';
  if ('693' == e) return 'استان گیلان - شهر  کوچصفهان';
  if (!('271' != e && '272' != e)) return 'استان گیلان - شهر لاهیجان';
  if ('694' == e) return 'استان گیلان - شهر  لشت نشاء';
  if ('270' == e) return 'استان گیلان - شهر لنگرود';
  if ('516' == e) return 'استان گیلان - شهر  ماسال و شاندرمن';
  if (!('333' != e && '334' != e)) return 'استان کرمانشاه - شهر اسلام آباد';
  if ('691' == e) return 'استان کرمانشاه - شهر باینگان';
  if (!('322' != e && '323' != e)) return 'استان کرمانشاه - شهر پاوه';
  if ('595' == e) return 'استان کرمانشاه - شهر ثلاث باباجانی';
  if ('395' == e) return 'استان کرمانشاه - شهر جوانرود';
  if ('641' == e) return 'استان کرمانشاه - شهر حمیل';
  if ('596' == e) return 'استان کرمانشاه - شهر روانسر';
  if ('336' == e) return 'استان کرمانشاه - شهر سرپل ذهاب';
  if ('335' == e) return 'استان کرمانشاه - شهر سنقر';
  if ('496' == e) return 'استان کرمانشاه - شهر صحنه';
  if ('337' == e) return 'استان کرمانشاه - شهر قصرشیرین';
  if (!('324' != e && '325' != e)) return 'استان کرمانشاه - شهر کرمانشاه';
  if ('394' == e) return 'استان کرمانشاه - شهر کرند';
  if ('330' == e) return 'استان کرمانشاه - شهر کنگاور';
  if ('332' == e) return 'استان کرمانشاه - شهر گیلانغرب';
  if ('331' == e) return 'استان کرمانشاه - شهر هرسین';
  if ('687' == e) return 'استان کهکیلویه و بویراحمد - شهر باشت';
  if (!('422' != e && '423' != e)) return 'استان کهکیلویه و بویراحمد - شهر  بویراحمد(یاسوج)';
  if ('599' == e) return 'استان کهکیلویه و بویراحمد - شهر بهمنی';
  if ('600' == e) return 'استان کهکیلویه و بویراحمد - شهر چاروسا';
  if ('688' == e) return 'استان کهکیلویه و بویراحمد - شهر دروهان';
  if (!('424' != e && '425' != e)) return 'استان کهکیلویه و بویراحمد - شهر  کهکیلویه(دهدشت)';
  if ('426' == e) return 'استان کهکیلویه و بویراحمد - شهر  گچساران(دوگنبدان)';
  if ('550' == e) return 'استان کهکیلویه و بویراحمد - شهر لنده';
  if ('697' == e) return 'استان کهکیلویه و بویراحمد - شهر  مارگون';
  if ('384' == e) return 'استان کردستان - شهر بانه';
  if (!('377' != e && '378' != e)) return 'استان کردستان - شهر بیجار';
  if ('558' == e) return 'استان کردستان - شهر دهگلان';
  if ('385' == e) return 'استان کردستان - شهر دیواندره';
  if ('646' == e) return 'استان کردستان - شهر سروآباد';
  if (!('375' != e && '376' != e)) return 'استان کردستان - شهر سقز';
  if (!('372' != e && '373' != e)) return 'استان کردستان - شهر سنندج';
  if (!('379' != e && '380' != e)) return 'استان کردستان - شهر قروه';
  if ('383' == e) return 'استان کردستان - شهر کامیاران';
  if ('674' == e) return 'استان کردستان - شهر کرانی';
  if (!('381' != e && '382' != e)) return 'استان کردستان - شهر مریوان';
  if ('676' == e) return 'استان کردستان - شهر نمشیر';
  if ('722' == e) return 'استان کرمان - شهر ارزونیه';
  if ('542' == e) return 'استان کرمان - شهر انار';
  if (!('312' != e && '313' != e)) return 'استان کرمان - شهر بافت';
  if ('317' == e) return 'استان کرمان - شهر بردسیر';
  if (!('310' != e && '311' != e)) return 'استان کرمان - شهر بم';
  if (!('302' != e && '303' != e)) return 'استان کرمان - شهر جیرفت';
  if ('583' == e) return 'استان کرمان - شهر رابر';
  if ('321' == e) return 'استان کرمان - شهر راور';
  if ('382' == e) return 'استان کرمان - شهر راین';
  if (!('304' != e && '305' != e)) return 'استان کرمان - شهر رفسنجان';
  if ('536' == e) return 'استان کرمان - شهر  رودبار کهنوج';
  if ('605' == e) return 'استان کرمان - شهر ریگان';
  if (!('308' != e && '309' != e)) return 'استان کرمان - شهر زرند';
  if (!('306' != e && '307' != e)) return 'استان کرمان - شهر سیرجان';
  if ('319' == e) return 'استان کرمان - شهر شهداد';
  if (!('313' != e && '314' != e)) return 'استان کرمان - شهر شهربابک';
  if ('606' == e) return 'استان کرمان - شهر عنبرآباد';
  if ('320' == e) return 'استان کرمان - شهر فهرج';
  if ('698' == e) return 'استان کرمان - شهر قلعه گنج';
  if (!('298' != e && '299' != e)) return 'استان کرمان - شهر کرمان';
  if ('535' == e) return 'استان کرمان - شهر کوهبنان';
  if (!('315' != e && '316' != e)) return 'استان کرمان - شهر کهنوج';
  if ('318' == e) return 'استان کرمان - شهر گلباف';
  if ('607' == e) return 'استان کرمان - شهر ماهان';
  if ('608' == e) return 'استان کرمان - شهر منوجان';
  if ('508' == e) return 'استان قزوین - شهر آبیک';
  if ('538' == e) return 'استان قزوین - شهر آوج';
  if ('728' == e) return 'استان قزوین - شهر البرز';
  if ('509' == e) return 'استان قزوین - شهر بوئین زهرا';
  if (!('438' != e && '439' != e)) return 'استان قزوین - شهر تاکستان';
  if ('580' == e) return 'استان قزوین - شهر رودبار الموت';
  if ('590' == e) return 'استان قزوین - شهر رودبار شهرستان';
  if ('559' == e) return 'استان قزوین - شهر ضیاءآباد';
  if ('588' == e) return 'استان قزوین - شهر طارم سفلی';
  if (!('431' != e && '432' != e)) return 'استان قزوین - شهر قزوین';
  if (!('037' != e && '038' != e)) return 'استان قم - شهر قم';
  if ('702' == e) return 'استان قم - شهر کهک';
  if (!('240' != e && '241' != e)) return 'استان فارس - شهر آباده';
  if ('670' == e) return 'استان فارس - شهر  آباده طشک';
  if ('648' == e) return 'استان فارس - شهر  ارسنجان';
  if ('252' == e) return 'استان فارس - شهر استهبان';
  if ('678' == e) return 'استان فارس - شهر  اشکنان';
  if ('253' == e) return 'استان فارس - شهر اقلید';
  if ('649' == e) return 'استان فارس - شهر اوز';
  if ('513' == e) return 'استان فارس - شهر بوانات';
  if ('546' == e) return 'استان فارس - شهر بیضا';
  if ('671' == e) return 'استان فارس - شهر جویم';
  if (!('246' != e && '247' != e)) return 'استان فارس - شهر جهرم';
  if ('654' == e) return 'استان فارس - شهر  حاجی آباد(زرین دشت)';
  if ('548' == e) return 'استان فارس - شهر خرامه';
  if ('547' == e) return 'استان فارس - شهر  خشت و کمارج';
  if ('655' == e) return 'استان فارس - شهر خفر';
  if (!('248' != e && '249' != e)) return 'استان فارس - شهر داراب';
  if ('253' == e) return 'استان فارس - شهر سپیدان';
  if ('514' == e) return 'استان فارس - شهر سروستان';
  if ('665' == e) return 'استان فارس - شهر  سعادت آباد';
  if ('673' == e) return 'استان فارس - شهر شیبکوه';
  if (!('228' != e && '229' != e && '230' != e)) return 'استان فارس - شهر شیراز';
  if ('679' == e) return 'استان فارس - شهر فراشبند';
  if (!('256' != e && '257' != e)) return 'استان فارس - شهر فسا';
  if (!('244' != e && '245' != e)) return 'استان فارس - شهر  فیروزآباد';
  if ('681' == e) return 'استان فارس - شهر  قنقری(خرم بید)';
  if ('723' == e) return 'استان فارس - شهر قیروکارزین';
  if (!('236' != e && '237' != e)) return 'استان فارس - شهر کازرون';
  if ('683' == e) return 'استان فارس - شهر کوار';
  if ('656' == e) return 'استان فارس - شهر کراش';
  if (!('250' != e && '251' != e)) return 'استان فارس - شهر لارستان';
  if ('515' == e) return 'استان فارس - شهر لامرد';
  if (!('242' != e && '243' != e)) return 'استان فارس - شهر مرودشت';
  if (!('238' != e && '239' != e)) return 'استان فارس - شهر ممسنی';
  if ('657' == e) return 'استان فارس - شهر مهر';
  if ('255' == e) return 'استان فارس - شهر نی ریز';
  if ('684' == e) return 'استان سمنان - شهر ایوانکی';
  if ('700' == e) return 'استان سمنان - شهر بسطام';
  if ('642' == e) return 'استان سمنان - شهر بیارجمند';
  if ('457' == e) return 'استان سمنان - شهر  دامغان';
  if ('456' == e) return 'استان سمنان - شهر سمنان';
  if (!('458' != e && '459' != e)) return 'استان سمنان - شهر شاهرود';
  if ('460' == e) return 'استان سمنان - شهر گرمسار';
  if ('530' == e) return 'استان سمنان - شهر مهدیشهر';
  if ('520' == e) return 'استان سمنان - شهر میامی';
  if (!('358' != e && '359' != e)) return 'استان  سیستان و بلوچستان - شهر ایرانشهر';
  if ('682' == e) return 'استان  سیستان و بلوچستان - شهر بزمان';
  if ('703' == e) return 'استان  سیستان و بلوچستان - شهر بمپور';
  if (!('364' != e && '365' != e)) return 'استان  سیستان و بلوچستان - شهر چابهار';
  if ('371' == e) return 'استان  سیستان و بلوچستان - شهر خاش';
  if ('701' == e) return 'استان  سیستان و بلوچستان - شهر دشتیاری';
  if ('720' == e) return 'استان  سیستان و بلوچستان - شهر راسک';
  if (!('366' != e && '367' != e)) return 'استان  سیستان و بلوچستان - شهر زابل';
  if ('704' == e) return 'استان  سیستان و بلوچستان - شهر زابلی';
  if (!('361' != e && '362' != e)) return 'استان  سیستان و بلوچستان - شهر زاهدان';
  if (!('369' != e && '370' != e)) return 'استان  سیستان و بلوچستان - شهر سراوان';
  if ('635' == e) return 'استان  سیستان و بلوچستان - شهر سرباز';
  if ('668' == e) return 'استان  سیستان و بلوچستان - شهر  سیب و سوران';
  if ('533' == e) return 'استان  سیستان و بلوچستان - شهر  شهرکی و ناروئی(زهک)';
  if ('705' == e) return 'استان  سیستان و بلوچستان - شهر  شیب آب';
  if ('699' == e) return 'استان  سیستان و بلوچستان - شهر فنوج';
  if ('669' == e) return 'استان  سیستان و بلوچستان - شهر قصرقند';
  if ('725' == e) return 'استان  سیستان و بلوچستان - شهر کنارک';
  if ('597' == e) return 'استان  سیستان و بلوچستان - شهر  لاشار(اسپکه)';
  if ('611' == e) return 'استان  سیستان و بلوچستان - شهر میرجاوه';
  if ('525' == e) return 'استان  سیستان و بلوچستان - شهر نیک شهر';
  if ('181' == e) return 'استان خوزستان - شهر آبادان';
  if ('527' == e) return 'استان خوزستان - شهر آغاجاری';
  if ('585' == e) return 'استان خوزستان - شهر اروندکنار';
  if ('685' == e) return 'استان خوزستان - شهر امیدیه';
  if ('663' == e) return 'استان خوزستان - شهر اندیکا';
  if (!('192' != e && '193' != e)) return 'استان خوزستان - شهر اندیمشک';
  if (!('174' != e && '175' != e)) return 'استان خوزستان - شهر اهواز';
  if (!('183' != e && '184' != e)) return 'استان خوزستان - شهر ایذه';
  if ('481' == e) return 'استان خوزستان - شهر  باغ ملک';
  if ('706' == e) return 'استان خوزستان - شهر  بندر امام خمینی';
  if (!('194' != e && '195' != e)) return 'استان خوزستان - شهر بندرماهشهر';
  if (!('185' != e && '186' != e)) return 'استان خوزستان - شهر بهبهان';
  if ('182' == e) return 'استان خوزستان - شهر خرمشهر';
  if (!('199' != e && '200' != e)) return 'استان خوزستان - شهر دزفول';
  if ('198' == e) return 'استان خوزستان - شهر  دشت آزادگان';
  if ('662' == e) return 'استان خوزستان - شهر  رامشیر';
  if (!('190' != e && '191' != e)) return 'استان خوزستان - شهر رامهرمز';
  if ('692' == e) return 'استان خوزستان - شهر سردشت';
  if ('189' == e) return 'استان خوزستان - شهر شادگان';
  if ('707' == e) return 'استان خوزستان - شهر شاوور';
  if ('526' == e) return 'استان خوزستان - شهر شوش';
  if (!('187' != e && '188' != e)) return 'استان خوزستان - شهر شوشتر';
  if ('729' == e) return 'استان خوزستان - شهر گتوند';
  if ('730' == e) return 'استان خوزستان - شهر لالی';
  if (!('196' != e && '197' != e)) return 'استان خوزستان - شهر مسجدسلیمان';
  if ('661' == e) return 'استان خوزستان - شهر هندیجان';
  if ('680' == e) return 'استان خوزستان - شهر هویزه';
  if ('643' == e) return 'استان خراسان رضوی - شهر  احمدآباد';
  if ('562' == e) return 'استان خراسان رضوی - شهر بجستان';
  if ('572' == e) return 'استان خراسان رضوی - شهر بردسکن';
  if ('074' == e) return 'استان خراسان رضوی - شهر تایباد';
  if ('644' == e) return 'استان خراسان رضوی - شهر  تخت جلگه';
  if (!('072' != e && '073' != e)) return 'استان خراسان رضوی - شهر تربت جام';
  if (!('069' != e && '070' != e)) return 'استان خراسان رضوی - شهر تربت حیدریه';
  if ('521' == e) return 'استان خراسان رضوی - شهر جغتای';
  if ('573' == e) return 'استان خراسان رضوی - شهر جوین';
  if ('522' == e) return 'استان خراسان رضوی - شهر چناران';
  if ('724' == e) return 'استان خراسان رضوی - شهر  خلیل آباد';
  if ('076' == e) return 'استان خراسان رضوی - شهر خواف';
  if ('077' == e) return 'استان خراسان رضوی - شهر درگز';
  if ('650' == e) return 'استان خراسان رضوی - شهر رشتخوار';
  if ('574' == e) return 'استان خراسان رضوی - شهر زبرخان';
  if (!('078' != e && '079' != e)) return 'استان خراسان رضوی - شهر سبزوار';
  if ('081' == e) return 'استان خراسان رضوی - شهر سرخس';
  if ('084' == e) return 'استان خراسان رضوی - شهر فریمان';
  if ('651' == e) return 'استان خراسان رضوی - شهر  فیض آباد';
  if (!('086' != e && '087' != e)) return 'استان خراسان رضوی - شهر قوچان';
  if (!('089' != e && '090' != e)) return 'استان خراسان رضوی - شهر کاشمر';
  if ('553' == e) return 'استان خراسان رضوی - شهر کلات';
  if ('091' == e) return 'استان خراسان رضوی - شهر گناباد';
  if (!('092' != e && '093' != e && '094' != e)) return 'استان خراسان رضوی - شهر مشهد';
  if ('097' == e) return 'استان خراسان رضوی - شهر  مشهد منطقه2';
  if ('098' == e) return 'استان خراسان رضوی - شهر  مشهد منطقه3';
  if ('096' == e) return 'استان خراسان رضوی - شهر  مشهد منطقه1';
  if (!('105' != e && '106' != e)) return 'استان خراسان رضوی - شهر نیشابور';
  if ('063' == e) return 'استان خراسان شمالی - شهر اسفراین';
  if (!('067' != e && '068' != e)) return 'استان خراسان شمالی - شهر  بجنورد';
  if ('075' == e) return 'استان خراسان شمالی - شهر جاجرم';
  if ('591' == e) return 'استان خراسان شمالی - شهر رازوجرکلان';
  if ('082' == e) return 'استان خراسان شمالی - شهر شیروان';
  if ('635' == e) return 'استان خراسان شمالی - شهر فاروج';
  if ('524' == e) return 'استان خراسان شمالی - شهر مانه و سملقان';
  if ('468' == e) return 'استان چهارمحال و بختیاری - شهر اردل';
  if ('465' == e) return 'استان چهارمحال و بختیاری - شهر بروجن';
  if (!('461' != e && '462' != e)) return 'استان چهارمحال و بختیاری - شهر شهرکرد';
  if ('467' == e) return 'استان چهارمحال و بختیاری - شهر فارسان';
  if ('555' == e) return 'استان چهارمحال و بختیاری - شهر کوهرنگ';
  if ('633' == e) return 'استان چهارمحال و بختیاری - شهر کیار';
  if ('629' == e) return 'استان چهارمحال و بختیاری - شهر گندمان';
  if ('466' == e) return 'استان چهارمحال و بختیاری - شهر لردگان';
  if ('696' == e) return 'استان چهارمحال و بختیاری - شهر میانکوه';
  if ('721' == e) return 'استان خراسان جنوبی - شهر  بشرویه';
  if (!('064' != e && '065' != e)) return 'استان خراسان جنوبی - شهر بیرجند';
  if ('523' == e) return 'استان خراسان جنوبی - شهر درمیان';
  if ('652' == e) return 'استان خراسان جنوبی - شهر زیرکوه';
  if ('719' == e) return 'استان خراسان جنوبی - شهر سرایان';
  if ('716' == e) return 'استان خراسان جنوبی - شهر سربیشه';
  if ('085' == e) return 'استان خراسان جنوبی - شهر فردوس';
  if ('088' == e) return 'استان خراسان جنوبی - شهر قائنات';
  if ('563' == e) return 'استان خراسان جنوبی - شهر نهبندان';
  if ('529' == e) return 'استان بوشهر - شهر بندر دیلم';
  if ('353' == e) return 'استان بوشهر - شهر بندر گناوه';
  if (!('349' != e && '350' != e)) return 'استان بوشهر - شهر بوشهر';
  if ('355' == e) return 'استان بوشهر - شهر تنگستان';
  if ('609' == e) return 'استان بوشهر - شهر جم';
  if (!('351' != e && '352' != e)) return 'استان بوشهر - شهر  دشتستان';
  if ('354' == e) return 'استان بوشهر - شهر دشتی';
  if ('732' == e) return 'استان بوشهر - شهر دلوار';
  if ('357' == e) return 'استان بوشهر - شهر دیر';
  if ('532' == e) return 'استان بوشهر - شهر  سعد آباد';
  if ('610' == e) return 'استان بوشهر - شهر شبانکاره';
  if ('356' == e) return 'استان بوشهر - شهر کنگان';
  if ('556' == e) return 'استان تهران - شهر اسلامشهر';
  if ('658' == e) return 'استان تهران - شهر پاکدشت';
  if (!('001' != e && '002' != e && '003' != e && '004' != e && '005' != e && '006' != e && '007' != e && '008' != e)) return 'استان تهران - شهر تهران مرکزی';
  if ('011' == e) return 'استان تهران - شهر تهران جنوب';
  if ('020' == e) return 'استان تهران - شهر تهران شرق';
  if ('025' == e) return 'استان تهران - شهر تهرانشمال';
  if ('015' == e) return 'استان تهران - شهر تهران غرب';
  if ('043' == e) return 'استان تهران - شهر دماوند';
  if ('666' == e) return 'استان تهران - شهر رباط کریم';
  if ('489' == e) return 'استان تهران - شهر ساوجبلاغ';
  if (!('044' != e && '045' != e)) return 'استان تهران - شهر شمیران';
  if (!('048' != e && '049' != e)) return 'استان تهران - شهر شهرری';
  if (!('490' != e && '491' != e)) return 'استان تهران - شهر  شهریار';
  if ('695' == e) return 'استان تهران - شهر طالقان';
  if ('659' == e) return 'استان تهران - شهر فیروزکوه';
  if (!('031' != e && '032' != e)) return 'استان تهران - شهر کرج';
  if ('664' == e) return 'استان تهران - شهر کهریزک';
  if ('717' == e) return 'استان تهران - شهر نظرآباد';
  if (!('041' != e && '042' != e)) return 'استان تهران - شهر ورامین';
  if (!('471' != e && '472' != e)) return ' امور خارجه -  امور خارجه';
  if ('454' == e) return 'استان ایلام - شهر آبدانان';
  if ('581' == e) return 'استان ایلام - شهر  ارکوازی(ملکشاهی)';
  if (!('449' != e && '450' != e)) return 'استان ایلام - شهر ایلام';
  if ('616' == e) return 'استان ایلام - شهر ایوان';
  if ('534' == e) return 'استان ایلام - شهر بدره';
  if ('455' == e) return 'استان ایلام - شهر  دره شهر';
  if ('451' == e) return 'استان ایلام - شهر دهلران';
  if ('726' == e) return 'استان ایلام - شهر زرین آباد';
  if ('634' == e) return 'استان ایلام - شهر شیروان لومار';
  if ('453' == e) return 'استان ایلام - شهر شیروان و چرداول';
  if ('727' == e) return 'استان ایلام - شهر موسیان';
  if ('452' == e) return 'استان ایلام - شهر مهران';
  if (!('145' != e && '146' != e)) return 'استان اردبیل - شهر اردبیل';
  if ('731' == e) return 'استان اردبیل - شهر ارشق';
  if ('690' == e) return 'استان اردبیل - شهر انگوت';
  if ('601' == e) return 'استان اردبیل - شهر بیله سوار';
  if ('504' == e) return 'استان اردبیل - شهر پارس آباد';
  if ('163' == e) return 'استان اردبیل - شهر خلخال';
  if ('714' == e) return 'استان اردبیل - شهر خورش رستم';
  if ('715' == e) return 'استان اردبیل - شهر سرعین';
  if ('566' == e) return 'استان اردبیل - شهر  سنجبد(کوثر)';
  if (!('166' != e && '167' != e)) return 'استان اردبیل - شهر مشکین شهر';
  if (!('161' != e && '162' != e)) return 'استان اردبیل - شهر مغان';
  if ('686' == e) return 'استان اردبیل - شهر نمین';
  if ('603' == e) return 'استان اردبیل - شهر نیر';
  if ('619' == e) return 'استان اصفهان - شهر  آران و بیدگل';
  if ('118' == e) return 'استان اصفهان - شهر اردستان';
  if (!('127' != e && '128' != e && '129' != e)) return 'استان اصفهان - شهر اصفهان';
  if ('620' == e) return 'استان اصفهان - شهر باغ بهادران';
  if ('621' == e) return 'استان اصفهان - شهر بوئین و میاندشت';
  if ('549' == e) return 'استان اصفهان - شهر تیران و کرون';
  if ('564' == e) return 'استان اصفهان - شهر جرقویه';
  if ('575' == e) return 'استان اصفهان - شهر چادگان';
  if (!('113' != e && '114' != e)) return 'استان اصفهان - شهر  خمینی شهر';
  if ('122' == e) return 'استان اصفهان - شهر خوانسار';
  if ('540' == e) return 'استان اصفهان - شهر خور و بیابانک';
  if ('660' == e) return 'استان اصفهان - شهر دولت آباد';
  if ('120' == e) return 'استان اصفهان - شهر سمیرم';
  if ('512' == e) return 'استان اصفهان - شهر سمیرم سفلی (دهاقان)';
  if (!('510' != e && '511' != e)) return 'استان اصفهان - شهر شاهین شهر';
  if ('119' == e) return 'استان اصفهان - شهر شهرضا';
  if ('115' == e) return 'استان اصفهان - شهر فریدن';
  if ('112' == e) return 'استان اصفهان - شهر فریدونشهر';
  if (!('110' != e && '111' != e)) return 'استان اصفهان - شهر فلاورجان';
  if (!('125' != e && '126' != e)) return 'استان اصفهان - شهر کاشان';
  if ('565' == e) return 'استان اصفهان - شهر  کوهپایه';
  if ('121' == e) return 'استان اصفهان - شهر گلپایگان';
  if (!('116' != e && '117' != e)) return 'استان اصفهان - شهر  لنجان(زرینشهر)';
  if ('541' == e) return 'استان اصفهان - شهر مبارکه';
  if ('622' == e) return 'استان اصفهان - شهر میمه';
  if ('124' == e) return 'استان اصفهان - شهر نائین';
  if (!('108' != e && '109' != e)) return 'استان اصفهان - شهر  نجف آباد';
  if ('123' == e) return 'استان اصفهان - شهر نطنز';
  if (!('427' != e && '428' != e)) return 'استان زنجان - شهر زنجان';
  if ('507' == e) return 'استان آذربایجان شرقی - شهر ملکان';
  if ('158' == e) return 'استان آذربایجان شرقی - شهر مرند';
  if (!('152' != e && '153' != e)) return 'استان آذربایجان شرقی - شهر میانه';
  if ('615' == e) return 'استان قزوین - شهر ابهر و خرمدره';
};

/*********************************************************
 * Validate Iran bank card number
 *********************************************************
 * @var input string
 * @return boolean
 */
const cardNumber = (input) => {
  if (/^\d{16}$/.test(input)) {

    var sum = 0,
      temp;

    input = input.toString();

    for (var i = 1; i <= 16; i++) {
      temp = input.charAt(i - 1);
      temp = i % 2 === 0 ? parseInt(temp) : parseInt(temp) * 2;
      temp = temp > 9 ? temp - 9 : temp;
      sum += temp;
    }

    return sum % 10 === 0;

  }
}

/*********************************************************
 * Validate Iran postal code
 *********************************************************
 * @var input string
 * @return boolean
 */
const postalCode = (input) => /^(\d{5}-?\d{5})$/.test(input)

/*********************************************************
 * Validate sheba number
 *********************************************************
 * @var input string
 * @return boolean
 */
const sheba = (input) => {

  var ibanReplaceValues = [],
    ibanReplaceChars = [],
    tmpIBAN;

  if (input) {

    input = input.replace(/[\W_]+/, '');

    if ((input.length < 4 || input.length > 34) || (!isNaN(input[0]) ||
      !isNaN(input[1])) || (isNaN(input[2]) || isNaN(input[3]))) {
      return false;
    }

    ibanReplaceChars = range('A', 'Z');

    range(10, 35).forEach(function (tempvalue) {
      ibanReplaceValues.push(tempvalue.toString());
    });

    tmpIBAN = input.substr(4, input.length - 4) + input.substr(0, 4);

    ibanReplaceChars.forEach(function (value, index) {
      for (var i = 0; i < tmpIBAN.length; i++) {
        if (tmpIBAN[i] == value) {
          tmpIBAN = tmpIBAN.replace(tmpIBAN[i], ibanReplaceValues[index]);
        }
      }
    });

    tmpValue = parseInt(tmpIBAN.substr(0, 1));

    for (var i = 1; i < tmpIBAN.length; i++) {
      tmpValue *= 10;

      tmpValue += parseInt(tmpIBAN.substr(i, 1));

      tmpValue %= 97;
    }

    if (tmpValue != 1) {
      return false;
    }

    return true;

  }

  return false;

}

/*********************************************************
 * Validate meli code number
 *********************************************************
 * @var input string
 * @return boolean
 */
const melliCode = (input) => {

  if (! /^\d{8,10}$/.test(input) || /^[0]{10}|[1]{10}|[2]{10}|[3]{10}|[4]{10}|[5]{10}|[6]{10}|[7]{10}|[8]{10}|[9]{10}$/.test(input)) {
    return false;
  }

  var sub = 0,
    control;

  if (input.length == 8) {
    input = '00' + input;
  } else if (input.length == 9) {
    input = '0' + input;
  }

  for (var i = 0; i <= 8; i++) {
    sub = parseInt(sub) + (parseInt(input[i]) * (10 - i));
  }

  if ((parseInt(sub) % 11) < 2) {
    control = (parseInt(sub) % 11);
  } else {
    control = 11 - (parseInt(sub) % 11);
  }

  if (input[9] == control) {
    return true;
  } else {
    return false;
  }

}

const banksHash = {
  '010': {
    nickname: 'central-bank',
    name: 'Central Bank of Iran',
    persianName: 'بانک مرکزی جمهوری اسلامی ایران',
    code: '010',
  },
  '011': {
    nickname: 'sanat-madan',
    name: 'Sanat O Madan Bank',
    persianName: 'بانک صنعت و معدن',
    code: '011',
  },
  '012': {
    nickname: 'mellat',
    name: 'Mellat Bank',
    persianName: 'بانک ملت',
    code: '012',
  },
  '013': {
    nickname: 'refah',
    name: 'Refah Bank',
    persianName: 'بانک رفاه کارگران',
    code: '013',
  },
  '014': {
    nickname: 'maskan',
    name: 'Maskan Bank',
    persianName: 'بانک مسکن',
    code: '014',
  },
  '015': {
    nickname: 'sepah',
    name: 'Sepah Bank',
    persianName: 'بانک سپه',
    code: '015',
  },
  '016': {
    nickname: 'keshavarzi',
    name: 'Keshavarzi',
    persianName: 'بانک کشاورزی',
    code: '016',
  },
  '017': {
    nickname: 'melli',
    name: 'Melli',
    persianName: 'بانک ملی ایران',
    code: '017',
  },
  '018': {
    nickname: 'tejarat',
    name: 'Tejarat Bank',
    persianName: 'بانک تجارت',
    code: '018',
  },
  '019': {
    nickname: 'saderat',
    name: 'Saderat Bank',
    persianName: 'بانک صادرات ایران',
    code: '019',
  },
  '020': {
    nickname: 'tosee-saderat',
    name: 'Tose Saderat Bank',
    persianName: 'بانک توسعه صادرات',
    code: '020',
  },
  '021': {
    nickname: 'postbank',
    name: 'Post Bank',
    persianName: 'پست بانک ایران',
    code: '021',
  },
  '022': {
    nickname: 'tose-taavon',
    name: 'Tosee Taavon Bank',
    persianName: 'بانک توسعه تعاون',
    code: '022',
  },
  '051': {
    nickname: 'tosee',
    name: 'Tosee Bank',
    persianName: 'موسسه اعتباری توسعه',
    code: '051',
  },
  '052': {
    nickname: 'ghavamin',
    name: 'Ghavamin Bank',
    persianName: 'بانک قوامین',
    code: '052',
  },
  '053': {
    nickname: 'karafarin',
    name: 'Karafarin Bank',
    persianName: 'بانک کارآفرین',
    code: '053',
  },
  '054': {
    nickname: 'parsian',
    name: 'Parsian Bank',
    persianName: 'بانک پارسیان',
    code: '054',
    process: function (str) {
      str = str.substring(14);
      var formatted =
        '0' +
        str.substr(0, 2) +
        '-0' +
        str.substr(2, 7) +
        '-' +
        str.substr(9, 3);
      return {
        normal: str,
        formatted: formatted,
      };
    },
  },
  '055': {
    nickname: 'eghtesad-novin',
    name: 'Eghtesad Novin Bank',
    persianName: 'بانک اقتصاد نوین',
    code: '055',
  },
  '056': {
    nickname: 'saman',
    name: 'Saman Bank',
    persianName: 'بانک سامان',
    code: '056',
  },
  '057': {
    nickname: 'pasargad',
    name: 'Pasargad Bank',
    persianName: 'بانک پاسارگاد',
    code: '057',
    process: function (str) {
      str = str.substring(7);
      while (str[0] === '0') {
        str = str.substring(1);
      }
      str = str.substr(0, str.length - 2);
      var formatted =
        str.substr(0, 3) +
        '-' +
        str.substr(3, 3) +
        '-' +
        str.substr(6, 8) +
        '-' +
        str.substr(14, 1);
      return {
        normal: str,
        formatted: formatted,
      };
    },
  },
  '058': {
    nickname: 'sarmayeh',
    name: 'Sarmayeh Bank',
    persianName: 'بانک سرمایه',
    code: '058',
  },
  '059': {
    nickname: 'sina',
    name: 'Sina Bank',
    persianName: 'بانک سینا',
    code: '059',
  },
  '060': {
    nickname: 'mehr-iran',
    name: 'Mehr Iran Bank',
    persianName: 'بانک مهر ایران',
    code: '060',
  },
  '061': {
    nickname: 'shahr',
    name: 'City Bank',
    persianName: 'بانک شهر',
    code: '061',
    process: function (str) {
      str = str.substring(7);
      while (str[0] === '0') {
        str = str.substring(1);
      }
      return {
        normal: str,
        formatted: str,
      };
    },
  },
  '062': {
    nickname: 'ayandeh',
    name: 'Ayandeh Bank',
    persianName: 'بانک آینده',
    code: '062',
  },
  '063': {
    nickname: 'ansar',
    name: 'Ansar Bank',
    persianName: 'بانک انصار',
    code: '063',
  },
  '064': {
    nickname: 'gardeshgari',
    name: 'Gardeshgari Bank',
    persianName: 'بانک گردشگری',
    code: '064',
  },
  '065': {
    nickname: 'hekmat',
    name: 'Hekmat Iranian Bank',
    persianName: 'بانک حکمت ایرانیان',
    code: '065',
  },
  '066': {
    nickname: 'dey',
    name: 'Dey Bank',
    persianName: 'بانک دی',
    code: '066',
  },
  '069': {
    nickname: 'iran-zamin',
    name: 'Iran Zamin Bank',
    persianName: 'بانک ایران زمین',
    code: '069',
  },
  '070': {
    nickname: 'resalat',
    name: 'Resalat Bank',
    persianName: 'بانک قرض الحسنه رسالت',
    code: '070',
  },
  '073': {
    nickname: 'kosar',
    name: 'Kosar Bank',
    persianName: 'بانک کوثر',
    code: '073',
  },
  '075': {
    nickname: 'melall',
    name: 'Melall Bank',
    persianName: 'بانک ملل',
    code: '075',
  },
  '078': {
    nickname: 'khavar-mianeh',
    name: 'Melall Bank',
    persianName: 'بانک خاورمیانه',
    code: '078',
  },
  '080': {
    nickname: 'noor',
    name: 'Noor Bank',
    persianName: 'بانک نور',
    code: '080',
  },
  '090': {
    nickname: 'mehr-iran',
    name: 'Mehr Iran Bank',
    persianName: 'بانک مهر ایران',
    code: '090',
  },
  '095': {
    nickname: 'iran-venezuela',
    name: 'Iran and Venezuela Bank',
    persianName: 'بانک ایران و ونزوئلا',
    code: '095',
  },
};


function iso7064Mod97_10(iban) {
  var remainder = iban,
    block;
  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }
  return parseInt(remainder, 10) % 97;
}

const validSheba = function (str) {
  if (!str || typeof str != "string") return;
  if (!str.startsWith("IR")) str = "IR" + str;
  if (str.length !== 26) {
    return false;
  }
  if (!/IR[0-9]{24}/.test(str)) {
    return false;
  }
  var newStr = str.substr(4);
  var d1 = str.charCodeAt(0) - 65 + 10;
  var d2 = str.charCodeAt(1) - 65 + 10;
  newStr += d1.toString() + d2.toString() + str.substr(2, 2);

  var remainder = iso7064Mod97_10(newStr);
  if (remainder !== 1) {
    return false;
  }
  return true;
};
const getSheba = function (str) {
  if (!str || typeof str != "string") return;
  if (!str.startsWith("IR")) str = "IR" + str;
  var code = str.substr(4, 3);
  if (!banksHash[code]) {
    return false;
  }

  var bank = banksHash[code];
  var result = {
    nickname: bank.nickname,
    name: bank.name,
    persianName: bank.persianName,
    code: bank.code
  };
  if (bank.process) {
    var data = bank.process(str);
    result.accountNumber = data.normal;
    result.formattedAccountNumber = data.formatted;
  }
  return result;
};
const prettyStringify = (obj) => {
  var cache = [];
  let json = JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      // Duplicate reference found, discard key
      if (cache.includes(value)) return;

      // Store value in our collection
      cache.push(value);
    }
    return value;
  }, 2);
  cache = null; //
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}
window.boomiTools = {
  getIcCity, melliCode, sheba, postalCode, cardNumber, getSheba, validSheba, prettyStringify
}