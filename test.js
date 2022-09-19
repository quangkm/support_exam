function _findAnswer() {
    //filter right answers
    var questionGroups = document.getElementsByClassName("que");
    for (var i = 0; i < questionGroups.length; i++) {
        var question = questionGroups[i].getElementsByClassName("qtext")[0].innerHTML;
        if (map.get(question)) {
            var answers = questionGroups[i].getElementsByClassName("answer");
            for (var j = 0; j < answers.length; j++) {
                var answerLabel = answers[j].getElementsByTagName("label");
                for (var k = 0; k < answerLabel.length; k++) {
                    if (answerLabel[k].innerHTML.includes(map.get(question))) {
                        // console.log('ANSWER: ' + answerLabel[k].innerHTML);
                        answerLabel[k].innerHTML += '(***)';
                    }
                }
            }
        }
    }
    console.log('DONE');
}

const map = new Map();
function _initContent() {
    const para = document.createElement("div");
    para.id = "qkm";
    // document.getElementById("form-area").appendChild(para);
    // document.getElementById("qkm").innerHTML= 
    para.innerHTML = `
            <div id="page-outer" style="min-height: 228px;">
<div id="page">
	<div id="page-a">
					<div id="top-panel" class="dark1">
		    	<div class="container-fluid">
		        	<div class="row">
		            	<div class="col-md-12">
		                    		                        <div class="top-info-content">
		                            <ul class="theme-static-content"><li class="theme-static-item1"><span class="link-replace"><span class="static-icon"><i class="fa fa-life-ring"></i></span><span class="text">learningacademy@vpbank.com.vn</span></span></li><li class="theme-static-item2"><span class="link-replace"><span class="static-icon"><i class="fa fa-phone"></i></span><span class="text">+84 243 7305 6600</span></span></li></ul>		                        </div>
									                    		                        <ul class="social-list"><li class="li-facebook"><a href="https://www.facebook.com/groups/ChuyenNhaViPi" title="Facebook"><i class="fa fa-facebook"></i></a></li><li class="li-youtube-play"><a href="https://www.youtube.com/channel/UCyRH0SIaaQBPOxsqJfgwkoA" title="Youtube"><i class="fa fa-youtube-play"></i></a></li></ul>		                    									        		</div>
		 			</div>
				</div>
		    </div>
			    <div id="main-header">
	        <div class="container-fluid">
	            <div class="row">
	                <div class="col-md-12">
													<div class="main-logo" style="width:220px;">
	<a href="https://academy.vpbank.com.vn/learning" title="VPBank Learning Academy">
		<img src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/logo.svg" alt="VPBank Learning Academy">
	</a>
</div>
							<div class="menu-bar">
								<a class="show-menu" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#"><i class="fa fa-bars"></i></a>
							</div>
							<div class="menu-clear clearfix"></div>
	                    	<div class="mobile-nav">
								<ul class="main-menu theme-ddmenu" data-animtype="2" data-animspeed="300" data-breakpoint="768"><li class="level-1 home-item"><a href="https://academy.vpbank.com.vn/learning"><i class="fa fa-home"></i><span class="home-text">Trang chủ</span></a></li><li class="level-1 mycourses dropdown"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" title="Các khoá học của tôi">Các khoá học của tôi <span class="mycourses-num">(4)</span><span class="mobile-arrow"></span></a><ul class="dropdown-list"><li class="visible1 student"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=944" title="Quản trị rủi ro hoạt động...">Quản trị rủi ro hoạt động...</a></li><li class="visible1 student"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=928" title="Nhận thức trải nghiệm khách hàng...">Nhận thức trải nghiệm khách hàng...</a></li><li class="visible1 student"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=910" title="Nâng cao nhận thức An ninh...">Nâng cao nhận thức An ninh...</a></li><li class="visible1 student"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=901" title="Kiến thức về Phòng, chống gian...">Kiến thức về Phòng, chống gian...</a></li></ul></li><li class="level-1 bookmarks-item dropdown"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#"><span class="text">Đánh dấu trang</span><span class="mobile-arrow"></span></a><ul class="theme-bookmarks dropdown-list"><li class="theme-bookmarks-add"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" class="theme-bookmarks-form" data-url="/mod/quiz/review.php?attempt=543002&amp;cmid=4269" data-mb2bktitle="Nhận thức trải nghiệm khách hàng - Năm 2022: BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG" data-toggle="modal" data-target="#theme-bookmarks-modal">Đánh dấu trang này</a></li></ul></li><li class="level-1"><a class="" href="https://academy.vpbank.com.vn/learning/course/index.php">Danh mục</a></li><li class="level-1"><a class="" href="https://academy.vpbank.com.vn/learning/mod/page/view.php?id=1686">Khóa học</a></li><li class="level-1"><a class="" href="https://academy.vpbank.com.vn/learning/course/index.php?categoryid=35">Thư viện</a></li><li class="level-1"><a class="" href="https://academy.vpbank.com.vn/learning/mod/page/view.php?id=1707">Liên hệ</a></li><li class="level-1 lang-item dropdown"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#"><span class="lang-fullname">Vietnamese ‎(vi)‎</span><span class="lang-img" style="background-image:url('https://academy.vpbank.com.vn/learning/theme/image.php/mb2aofk/theme/1647572857/flags/48x32/VI');"></span><span class="mobile-arrow"></span></a><ul class="dropdown-list"><li class=""><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269&amp;lang=en"><span class="lang-shortname">en</span><span class="lang-fullname">English ‎(en)‎</span><span class="lang-img" style="background-image:url('https://academy.vpbank.com.vn/learning/theme/image.php/mb2aofk/theme/1647572857/flags/48x32/EN');"></span></a></li><li class="active"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269&amp;lang=vi"><span class="lang-shortname">vi</span><span class="lang-fullname">Vietnamese ‎(vi)‎</span><span class="lang-img" style="background-image:url('https://academy.vpbank.com.vn/learning/theme/image.php/mb2aofk/theme/1647572857/flags/48x32/VI');"></span></a></li></ul></li></ul>							</div>
							<div class="header-tools" style="margin-top:0.6rem;">
																<div class="theme-plugins"><div class="pull-right popover-region collapsed">
    <a id="message-drawer-toggle-627229f8558a7627229f8507dc4" class="nav-link d-inline-block popover-region-toggle position-relative" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" role="button">
        <i class="icon fa fa-comment fa-fw " title="Toggle messaging drawer" aria-label="Toggle messaging drawer"></i>
        <div class="count-container hidden" data-region="count-container" aria-label="There are 0 unread conversations">0</div>
    </a>
</div><div class="popover-region collapsed popover-region-notifications" id="nav-notification-popover-container" data-userid="9052" data-region="popover-region">
    <div class="popover-region-toggle nav-link" data-region="popover-region-toggle" role="button" aria-controls="popover-region-container-627229f856385627229f8507dc5" aria-haspopup="true" aria-label="Show notification window with no new notifications" tabindex="0">
                <i class="icon fa fa-bell fa-fw " title="Toggle notifications menu" aria-label="Toggle notifications menu"></i>
        <div class="count-container hidden" data-region="count-container" aria-label="There are 0 unread notifications">0</div>

    </div>
    <div id="popover-region-container-627229f856385627229f8507dc5" class="popover-region-container" data-region="popover-region-container" aria-expanded="false" aria-hidden="true" aria-label="Notification window" role="region">
        <div class="popover-region-header-container">
            <h3 class="popover-region-header-text" data-region="popover-region-header-text">Notifications</h3>
            <div class="popover-region-header-actions" data-region="popover-region-header-actions">        <a class="mark-all-read-button" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" title="Mark all as read" data-action="mark-all-read" role="button">
            <span class="normal-icon"><i class="icon fa fa-check fa-fw " title="Mark all as read" aria-label="Mark all as read"></i></span>
            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
        </a>
        <a href="https://academy.vpbank.com.vn/learning/message/notificationpreferences.php?userid=9052" title="Tùy chọn thông báo">
            <i class="icon fa fa-cog fa-fw " title="Tùy chọn thông báo" aria-label="Tùy chọn thông báo"></i>
        </a>
</div>
        </div>
        <div class="popover-region-content-container" data-region="popover-region-content-container">
            <div class="popover-region-content" data-region="popover-region-content">
                        <div class="all-notifications" data-region="all-notifications" role="log" aria-busy="false" aria-atomic="false" aria-relevant="additions"></div>
        <div class="empty-message" tabindex="0" data-region="empty-message">You have no notifications</div>

            </div>
            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
        </div>
                <a class="see-all-link" href="https://academy.vpbank.com.vn/learning/message/output/popup/notifications.php">
                    <div class="popover-region-footer-container">
                        <div class="popover-region-seeall-text">See all</div>
                    </div>
                </a>
    </div>
</div></div><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-toggle="modal" data-target="#header-search" class="search-btn btn isicon" title="Tìm kiếm"><span class="btn-icon"><i class="fa fa-search"></i></span><span class="text1">Tìm kiếm</span></a><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-toggle="modal" data-target="#header-login" class="login-btn btn btn-primary isicon" title="Khổng Minh <span>Quảng</span>"><span class="btn-icon"><i class="fa fa-user"></i></span><span class="text1">Khổng Minh <span>Quảng</span></span></a>							</div>
	                    	                </div>
	            </div>
	        </div>
	    </div>
		<div class="mb2notices"></div>				<div id="main-navigation">
			<div class="main-navigation-inner clearfix">
		        <div class="container-fluid">
		            <div class="row">
		                <div class="col-md-12">
		                	<ul class="main-menu theme-ddmenu sf-js-enabled" data-animtype="2" data-animspeed="300" data-breakpoint="768" style="touch-action: auto;"><li class="level-1 home-item"><a href="https://academy.vpbank.com.vn/learning"><i class="fa fa-home"></i><span class="home-text">Trang chủ</span></a></li><li class="level-1 mycourses dropdown"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" title="Các khoá học của tôi" class="sf-with-ul">Các khoá học của tôi <span class="mycourses-num">(4)</span><span class="mobile-arrow"></span></a><ul class="dropdown-list" style="display: none;"><li class="visible1 student"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=944" title="Quản trị rủi ro hoạt động...">Quản trị rủi ro hoạt động...</a></li><li class="visible1 student"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=928" title="Nhận thức trải nghiệm khách hàng...">Nhận thức trải nghiệm khách hàng...</a></li><li class="visible1 student"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=910" title="Nâng cao nhận thức An ninh...">Nâng cao nhận thức An ninh...</a></li><li class="visible1 student"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=901" title="Kiến thức về Phòng, chống gian...">Kiến thức về Phòng, chống gian...</a></li></ul></li><li class="level-1 bookmarks-item dropdown"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" class="sf-with-ul"><span class="text">Đánh dấu trang</span><span class="mobile-arrow"></span></a><ul class="theme-bookmarks dropdown-list" style="display: none;"><li class="theme-bookmarks-add"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" class="theme-bookmarks-form" data-url="/mod/quiz/review.php?attempt=543002&amp;cmid=4269" data-mb2bktitle="Nhận thức trải nghiệm khách hàng - Năm 2022: BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG" data-toggle="modal" data-target="#theme-bookmarks-modal">Đánh dấu trang này</a></li></ul></li><li class="level-1"><a class="" href="https://academy.vpbank.com.vn/learning/course/index.php">Danh mục</a></li><li class="level-1"><a class="" href="https://academy.vpbank.com.vn/learning/mod/page/view.php?id=1686">Khóa học</a></li><li class="level-1"><a class="" href="https://academy.vpbank.com.vn/learning/course/index.php?categoryid=35">Thư viện</a></li><li class="level-1"><a class="" href="https://academy.vpbank.com.vn/learning/mod/page/view.php?id=1707">Liên hệ</a></li><li class="level-1 lang-item dropdown"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" class="sf-with-ul"><span class="lang-fullname">Vietnamese ‎(vi)‎</span><span class="lang-img" style="background-image:url('https://academy.vpbank.com.vn/learning/theme/image.php/mb2aofk/theme/1647572857/flags/48x32/VI');"></span><span class="mobile-arrow"></span></a><ul class="dropdown-list" style="display: none;"><li class=""><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269&amp;lang=en"><span class="lang-shortname">en</span><span class="lang-fullname">English ‎(en)‎</span><span class="lang-img" style="background-image:url('https://academy.vpbank.com.vn/learning/theme/image.php/mb2aofk/theme/1647572857/flags/48x32/EN');"></span></a></li><li class="active"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269&amp;lang=vi"><span class="lang-shortname">vi</span><span class="lang-fullname">Vietnamese ‎(vi)‎</span><span class="lang-img" style="background-image:url('https://academy.vpbank.com.vn/learning/theme/image.php/mb2aofk/theme/1647572857/flags/48x32/VI');"></span></a></li></ul></li></ul>		                </div>
		            </div>
		        </div>
			</div>
	    </div>
	    	</div><!-- //end #page-a -->
<div id="page-b">
<div class="theme-banner isimage"><div class="container-fluid"><div class="row"><div class="col-md-12"><div class="banner-inner clearfix"><div class="banner-left"><div class="breadcrumb"><nav role="navigation" aria-label="Vệt mẩu bánh mì">
    <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="https://academy.vpbank.com.vn/learning/">Trang chủ</a>
                </li>
                <li class="breadcrumb-item">Các khoá học của tôi</li>
                <li class="breadcrumb-item">
                    <a href="https://academy.vpbank.com.vn/learning/course/view.php?id=928" title="Nhận thức trải nghiệm khách hàng - Năm 2022">Nhận thức trải nghiệm khách hàng - Năm 2022</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="https://academy.vpbank.com.vn/learning/course/view.php?id=928#section-0">Nội dung khóa học</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="https://academy.vpbank.com.vn/learning/mod/quiz/view.php?id=4269" aria-current="page" title="Đề thi">BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG</a>
                </li>
    </ol>
</nav></div><h1 class="h4"><a href="https://academy.vpbank.com.vn/learning/course/view.php?id=928">Nhận thức trải nghiệm khách hàng - Năm 2022</a></h1></div><div class="banner-right"></div></div><div class="banner-bg" style="background-image:url('//academy.vpbank.com.vn/learning/pluginfile.php/1/theme_mb2aofk/bannerimg/1647572857/header.jpg');"></div><div class="banner-bg-color"></div></div></div></div></div><div id="site-menu">
	<div class="container-fluid">
    	<div class="row">
        	<div class="col-md-12" style="min-height:0;">
            	<ul class="site-menu-list dropdown-list"><li class="item-dashboard"><a class="btn btn-sm isicon" href="https://academy.vpbank.com.vn/learning/my"><span class="btn-icon"><i class="fa fa-tachometer"></i></span><span class="item-text">Trang của tôi</span></a></li><li class="item-frontpage"><a class="btn btn-sm isicon" href="https://academy.vpbank.com.vn/learning/?redirect=0"><span class="btn-icon"><i class="fa fa-home"></i></span><span class="item-text">Trang chủ</span></a></li><li class="item-calendar"><a class="btn btn-sm isicon" href="https://academy.vpbank.com.vn/learning/calendar/view.php?view=month"><span class="btn-icon"><i class="fa fa-calendar"></i></span><span class="item-text">Lịch</span></a></li><li class="item-badges"><a class="btn btn-sm isicon" href="https://academy.vpbank.com.vn/learning/badges/mybadges.php"><span class="btn-icon"><i class="fa fa-bookmark"></i></span><span class="item-text">Huy hiệu</span></a></li><li class="item-courses"><a class="btn btn-sm isicon" href="https://academy.vpbank.com.vn/learning/course/"><span class="btn-icon"><i class="fa fa-book"></i></span><span class="item-text">Danh mục khoá học</span></a></li></ul>
            </div>
        </div>
    </div>
</div>
<a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" class="show-sitemenu"></a>
<div class="mb2notices"></div><div id="main-content">
    <div class="container-fluid" id="yui_3_17_2_1_1651649018048_141">
        <div class="row" id="yui_3_17_2_1_1651649018048_140">
     		<div id="region-main" class="content-col col-md-9">
            	<div id="page-content">
					<div class="panel-link" data-toggle="modal" data-target="#course-panel"><span class="panel-text">TRANG CỦA TÔI</span><span class="panel-icon"><i class="fa fa-cog"></i></span></div><div class="clearfix"></div>                	<span class="notifications" id="user-notifications"></span>					                	<div role="main" id="yui_3_17_2_1_1651649018048_139"><span id="maincontent"></span><div class="theme-table-wrap"><div class="theme-table-wrap"><table class="generaltable generalbox quizreviewsummary table table-striped"><tbody><tr><th class="cell" scope="row">Bắt đầu vào lúc</th><td class="cell">Thứ tư, 4 Tháng năm 2022, 2:20 PM</td></tr><tr><th class="cell" scope="row">Trạng thái</th><td class="cell">Đã kết thúc</td></tr><tr><th class="cell" scope="row">Kết thúc lúc</th><td class="cell">Thứ tư, 4 Tháng năm 2022, 2:23 PM</td></tr><tr><th class="cell" scope="row">Thời gian thực hiện</th><td class="cell">2 phút 38 giây</td></tr><tr><th class="cell" scope="row">Tỷ lệ % điểm</th><td class="cell"><b>9,80</b> out of 10,00 (<b>98</b>%)</td></tr><tr><th class="cell" scope="row">Phản hồi</th><td class="cell"><p>Chúc mừng bạn đã đạt bài kiểm tra.</p><br></td></tr></tbody></table></div></div><form action="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269" method="post" class="questionflagsaveform" autocomplete="off" id="yui_3_17_2_1_1651649018048_130"><div id="yui_3_17_2_1_1651649018048_138"><div id="q2" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">1</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_24"><input type="hidden" name="q545499:2_:flagged" value="0"><input type="hidden" value="qaid=13094589&amp;qubaid=545499&amp;qid=2313721&amp;slot=2&amp;checksum=b019ea9faf0dd9ce2537580d1a8ea65d&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:2_:flaggedcheckbox" name="q545499:2_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content" id="yui_3_17_2_1_1651649018048_137"><div class="formulation clearfix" id="yui_3_17_2_1_1651649018048_136"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:2_:sequencecheck" value="3"><div class="qtext">Các bước thiết kế trải nghiệm khách hàng:</div><div class="ablock" id="yui_3_17_2_1_1651649018048_135"><div class="prompt">Chọn một đáp án:</div><div class="answer" id="yui_3_17_2_1_1651649018048_134"><div class="r0" id="yui_3_17_2_1_1651649018048_133"><input type="radio" name="q545499:2_answer" disabled="disabled" value="0" id="q545499:2_answer0"><label for="q545499:2_answer0" class="m-l-1"><span class="answernumber">a. </span>Xác định kỳ vọng của khách hàng - Lập bản đồ hành trình trải nghiệm - Đánh giá trải nghiệm tại mỗi điểm chạm - Thiết kế trải nghiệm khách hàng</label> </div>
<div class="r1"><input type="radio" name="q545499:2_answer" disabled="disabled" value="1" id="q545499:2_answer1" checked="checked"><label for="q545499:2_answer1" class="m-l-1"><span class="answernumber">b. </span>Lập bản đồ hành trình trải nghiệm - Đánh giá trải nghiệm tại mỗi điểm chạm - Xác định kỳ vọng của khách hàng - Thiết kế trải nghiệm khách hàng</label> </div>
<div class="r0"><input type="radio" name="q545499:2_answer" disabled="disabled" value="2" id="q545499:2_answer2"><label for="q545499:2_answer2" class="m-l-1"><span class="answernumber">c. </span>Lập bản đồ hành trình trải nghiệm - Xác định kỳ vọng của khách hàng - Đánh giá trải nghiệm tại mỗi điểm chạm - Thiết kế trải nghiệm khách hàng</label> </div>
<div class="r1"><input type="radio" name="q545499:2_answer" disabled="disabled" value="3" id="q545499:2_answer3"><label for="q545499:2_answer3" class="m-l-1"><span class="answernumber">d. </span>Đánh giá trải nghiệm tại mỗi điểm chạm - Xác định kỳ vọng của khách hàng - Thiết kế trải nghiệm khách hàng - Lập bản đồ hành trình trải nghiệm</label> </div>
</div></div></div></div></div><div id="q10" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">2</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_33"><input type="hidden" name="q545499:10_:flagged" value="0"><input type="hidden" value="qaid=13094597&amp;qubaid=545499&amp;qid=2313723&amp;slot=10&amp;checksum=f90cbdb903a44c9dc55059f287bfd4ca&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:10_:flaggedcheckbox" name="q545499:10_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:10_:sequencecheck" value="3"><div class="qtext"><span>Đâu KHÔNG phải là điểm chạm của khách hàng trên hành trình trải nghiệm khách hàng&nbsp;<span style="">với VPBank</span>?</span></div><div class="ablock"><div class="prompt">Chọn một đáp án:</div><div class="answer"><div class="r0"><input type="radio" name="q545499:10_answer" disabled="disabled" value="0" id="q545499:10_answer0"><label for="q545499:10_answer0" class="m-l-1"><span class="answernumber">a. </span>Khách hàng đọc những bài đánh giá tốt/không tốt về sản phẩm của VPBank trên mạng</label> </div>
<div class="r1"><input type="radio" name="q545499:10_answer" disabled="disabled" value="1" id="q545499:10_answer1"><label for="q545499:10_answer1" class="m-l-1"><span class="answernumber">b. </span>Khách hàng đi ngang qua chi nhánh của VPBank và nhìn thấy trước cửa chi nhánh có rất nhiều túi rác bốc mùi và mất mỹ quan</label> </div>
<div class="r0"><input type="radio" name="q545499:10_answer" disabled="disabled" value="2" id="q545499:10_answer2"><label for="q545499:10_answer2" class="m-l-1"><span class="answernumber">c. </span>Khách hàng mua sắm trên Shopee và nhìn thấy những ưu đãi đặc biệt khi mở thẻ tín dụng VISA VPBank Shopee Platinum</label> </div>
<div class="r1"><input type="radio" name="q545499:10_answer" disabled="disabled" value="3" id="q545499:10_answer3"><label for="q545499:10_answer3" class="m-l-1"><span class="answernumber">d. </span>Khách hàng đọc hợp đồng để chuẩn bị ký hợp đồng vay vốn với VPBank</label> </div>
<div class="r0"><input type="radio" name="q545499:10_answer" disabled="disabled" value="4" id="q545499:10_answer4" checked="checked"><label for="q545499:10_answer4" class="m-l-1"><span class="answernumber">e. </span>Không có đáp án nào chính xác</label> </div>
</div></div></div></div></div><div id="q1" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">3</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_42"><input type="hidden" name="q545499:1_:flagged" value="0"><input type="hidden" value="qaid=13094588&amp;qubaid=545499&amp;qid=2313717&amp;slot=1&amp;checksum=f72576483c3742a769f057e55aaa7bbe&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:1_:flaggedcheckbox" name="q545499:1_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:1_:sequencecheck" value="3"><div class="qtext">Đâu là định nghĩa đúng về trải nghiệm khách hàng?</div><div class="ablock"><div class="prompt">Chọn một đáp án:</div><div class="answer"><div class="r0"><input type="radio" name="q545499:1_answer" disabled="disabled" value="0" id="q545499:1_answer0"><label for="q545499:1_answer0" class="m-l-1"><span class="answernumber">a. </span>Trải nghiệm khách hàng chính là các hoạt động chăm sóc khách hàng</label> </div>
<div class="r1"><input type="radio" name="q545499:1_answer" disabled="disabled" value="1" id="q545499:1_answer1"><label for="q545499:1_answer1" class="m-l-1"><span class="answernumber">b. </span>Trải nghiệm khách hàng là những mong muốn của khách hàng khi giao dịch với công ty</label> </div>
<div class="r0"><input type="radio" name="q545499:1_answer" disabled="disabled" value="2" id="q545499:1_answer2"><label for="q545499:1_answer2" class="m-l-1"><span class="answernumber">c. </span>Trải nghiệm khách hàng là những phản hồi của khách hàng về sản phẩm, dịch vụ của doanh nghiệp</label> </div>
<div class="r1"><input type="radio" name="q545499:1_answer" disabled="disabled" value="3" id="q545499:1_answer3" checked="checked"><label for="q545499:1_answer3" class="m-l-1"><span class="answernumber">d. </span>Trải nghiệm khách hàng là cách khách hàng cảm nhận tương tác của họ với công ty của bạn</label> </div>
</div></div></div></div></div><div id="q8" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">4</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_51"><input type="hidden" name="q545499:8_:flagged" value="0"><input type="hidden" value="qaid=13094595&amp;qubaid=545499&amp;qid=2313715&amp;slot=8&amp;checksum=313f83042a43e4b21bf4ff113126d777&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:8_:flaggedcheckbox" name="q545499:8_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:8_:sequencecheck" value="3"><div class="qtext">Đâu là nhận định đúng về doanh nghiệp lấy khách hàng làm trọng tâm?</div><div class="ablock"><div class="prompt">Chọn một đáp án:</div><div class="answer"><div class="r0"><input type="radio" name="q545499:8_answer" disabled="disabled" value="0" id="q545499:8_answer0"><label for="q545499:8_answer0" class="m-l-1"><span class="answernumber">a. </span>Triết lý kinh doanh cơ bản là phục vụ khách hàng</label> </div>
<div class="r1"><input type="radio" name="q545499:8_answer" disabled="disabled" value="1" id="q545499:8_answer1"><label for="q545499:8_answer1" class="m-l-1"><span class="answernumber">b. </span>Chiến lược là mang lại giải pháp tốt nhất cho KH</label> </div>
<div class="r0"><input type="radio" name="q545499:8_answer" disabled="disabled" value="2" id="q545499:8_answer2"><label for="q545499:8_answer2" class="m-l-1"><span class="answernumber">c. </span>Định hướng kinh doanh là tập trung vào vòng đời khách hàng</label> </div>
<div class="r1"><input type="radio" name="q545499:8_answer" disabled="disabled" value="3" id="q545499:8_answer3"><label for="q545499:8_answer3" class="m-l-1"><span class="answernumber">d. </span>Tập trung vào nhóm khách hàng mang lại nhiều lợi nhuận nhất</label> </div>
<div class="r0"><input type="radio" name="q545499:8_answer" disabled="disabled" value="4" id="q545499:8_answer4" checked="checked"><label for="q545499:8_answer4" class="m-l-1"><span class="answernumber">e. </span>Tất cả các nhận định trên</label> </div>
</div></div></div></div></div><div id="q5" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">5</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 0,80 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_60"><input type="hidden" name="q545499:5_:flagged" value="0"><input type="hidden" value="qaid=13094592&amp;qubaid=545499&amp;qid=2313719&amp;slot=5&amp;checksum=bd859a5664dab58756d24aac53981c7f&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:5_:flaggedcheckbox" name="q545499:5_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:5_:sequencecheck" value="3"><div class="qtext">Đâu là những lợi ích của trải nghiệm khách hàng tốt?</div><div class="ablock"><div class="prompt">Chọn nhiều đáp án:</div><div class="answer"><div class="r0"><input type="checkbox" name="q545499:5_choice0" disabled="disabled" value="1" id="q545499:5_choice0" checked="checked"><label for="q545499:5_choice0" class="m-l-1"><span class="answernumber">a. </span>Tạo ra lợi thế cạnh tranh so với đối thủ</label> </div>
<div class="r1"><input type="checkbox" name="q545499:5_choice1" disabled="disabled" value="1" id="q545499:5_choice1" checked="checked"><label for="q545499:5_choice1" class="m-l-1"><span class="answernumber">b. </span>Tạo nên hiệu ứng truyền miệng tốt</label> </div>
<div class="r0"><input type="checkbox" name="q545499:5_choice2" disabled="disabled" value="1" id="q545499:5_choice2" checked="checked"><label for="q545499:5_choice2" class="m-l-1"><span class="answernumber">c. </span>Gia tăng hiệu quả kinh doanh</label> </div>
<div class="r1"><input type="checkbox" name="q545499:5_choice3" disabled="disabled" value="1" id="q545499:5_choice3" checked="checked"><label for="q545499:5_choice3" class="m-l-1"><span class="answernumber">d. </span>Giữ chân khách hàng</label> </div>
<div class="r0"><input type="checkbox" name="q545499:5_choice4" disabled="disabled" value="1" id="q545499:5_choice4"><label for="q545499:5_choice4" class="m-l-1"><span class="answernumber">e. </span>Giảm thiểu chi phí giữ chân khách hàng</label> </div>
</div></div></div></div></div><div id="q4" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">6</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_69"><input type="hidden" name="q545499:4_:flagged" value="0"><input type="hidden" value="qaid=13094591&amp;qubaid=545499&amp;qid=2313720&amp;slot=4&amp;checksum=90f368796f67706f0f00d119e18969b3&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:4_:flaggedcheckbox" name="q545499:4_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:4_:sequencecheck" value="3"><div class="qtext">Đâu là yếu tố được dự báo sẽ tạo nên sự khác biệt và lợi thế cạnh tranh lớn cho một doanh nghiệp?</div><div class="ablock"><div class="prompt">Chọn một đáp án:</div><div class="answer"><div class="r0"><input type="radio" name="q545499:4_answer" disabled="disabled" value="0" id="q545499:4_answer0" checked="checked"><label for="q545499:4_answer0" class="m-l-1"><span class="answernumber">a. </span>Trải nghiệm khách hàng</label> </div>
<div class="r1"><input type="radio" name="q545499:4_answer" disabled="disabled" value="1" id="q545499:4_answer1"><label for="q545499:4_answer1" class="m-l-1"><span class="answernumber">b. </span>Giá cả</label> </div>
<div class="r0"><input type="radio" name="q545499:4_answer" disabled="disabled" value="2" id="q545499:4_answer2"><label for="q545499:4_answer2" class="m-l-1"><span class="answernumber">c. </span>Sản phẩm</label> </div>
</div></div></div></div></div><div id="q9" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">7</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_78"><input type="hidden" name="q545499:9_:flagged" value="0"><input type="hidden" value="qaid=13094596&amp;qubaid=545499&amp;qid=2313718&amp;slot=9&amp;checksum=f8f9c514f9a7d105e7f4295e56ea4964&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:9_:flaggedcheckbox" name="q545499:9_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:9_:sequencecheck" value="3"><div class="qtext">Đâu là lợi ích của quản trị trải nghiệm khách hàng?</div><div class="ablock"><div class="prompt">Chọn một đáp án:</div><div class="answer"><div class="r0"><input type="radio" name="q545499:9_answer" disabled="disabled" value="0" id="q545499:9_answer0"><label for="q545499:9_answer0" class="m-l-1"><span class="answernumber">a. </span>Tăng mức độ hài lòng của khách hàng</label> </div>
<div class="r1"><input type="radio" name="q545499:9_answer" disabled="disabled" value="1" id="q545499:9_answer1"><label for="q545499:9_answer1" class="m-l-1"><span class="answernumber">b. </span>Tăng khách hàng mới</label> </div>
<div class="r0"><input type="radio" name="q545499:9_answer" disabled="disabled" value="2" id="q545499:9_answer2"><label for="q545499:9_answer2" class="m-l-1"><span class="answernumber">c. </span>Tăng khách hàng trung thành</label> </div>
<div class="r1"><input type="radio" name="q545499:9_answer" disabled="disabled" value="3" id="q545499:9_answer3" checked="checked"><label for="q545499:9_answer3" class="m-l-1"><span class="answernumber">d. </span>Tất cả các đáp án trên</label> </div>
</div></div></div></div></div><div id="q3" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">8</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_87"><input type="hidden" name="q545499:3_:flagged" value="0"><input type="hidden" value="qaid=13094590&amp;qubaid=545499&amp;qid=2313714&amp;slot=3&amp;checksum=976fbb1d04dc3e8830ee5410dcc83fe8&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:3_:flaggedcheckbox" name="q545499:3_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:3_:sequencecheck" value="3"><div class="qtext">Đâu là nhận định đúng về doanh nghiệp lấy khách hàng làm trọng tâm?</div><div class="ablock"><div class="prompt">Chọn một đáp án:</div><div class="answer"><div class="r0"><input type="radio" name="q545499:3_answer" disabled="disabled" value="0" id="q545499:3_answer0"><label for="q545499:3_answer0" class="m-l-1"><span class="answernumber">a. </span>Nhấn mạnh vào các đặc điểm và lợi thế của sản phẩm</label> </div>
<div class="r1"><input type="radio" name="q545499:3_answer" disabled="disabled" value="1" id="q545499:3_answer1" checked="checked"><label for="q545499:3_answer1" class="m-l-1"><span class="answernumber">b. </span>Nhấn mạnh vào các lợi ích của sản phẩm có thể đáp ứng được các nhu cầu riêng biệt của khách hàng</label> </div>
<div class="r0"><input type="radio" name="q545499:3_answer" disabled="disabled" value="2" id="q545499:3_answer2"><label for="q545499:3_answer2" class="m-l-1"><span class="answernumber">c. </span>Có thể bán được sản phẩm này cho bao nhiêu khách hàng?</label> </div>
<div class="r1"><input type="radio" name="q545499:3_answer" disabled="disabled" value="3" id="q545499:3_answer3"><label for="q545499:3_answer3" class="m-l-1"><span class="answernumber">d. </span>Tập trung vào từng giao dịch riêng rẽ</label> </div>
</div></div></div></div></div><div id="q7" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">9</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_96"><input type="hidden" name="q545499:7_:flagged" value="0"><input type="hidden" value="qaid=13094594&amp;qubaid=545499&amp;qid=2313724&amp;slot=7&amp;checksum=35ffa4c336d2d4045000a3a8505f73ce&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:7_:flaggedcheckbox" name="q545499:7_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:7_:sequencecheck" value="3"><div class="qtext">Một khách hàng của VPBank sau 1 thời gian sử dụng dịch vụ của VPBank muốn giới thiệu cho bạn bè cùng sử dụng nhưng không thể nào tìm các thông tin giới thiệu về sản phẩm trên website để gửi cho bạn bè. Đây là một điểm chạm như thế nào?</div><div class="ablock"><div class="prompt">Chọn một đáp án:</div><div class="answer"><div class="r0"><input type="radio" name="q545499:7_answer" disabled="disabled" value="0" id="q545499:7_answer0"><label for="q545499:7_answer0" class="m-l-1"><span class="answernumber">a. </span>Điểm chạm tích cực</label> </div>
<div class="r1"><input type="radio" name="q545499:7_answer" disabled="disabled" value="1" id="q545499:7_answer1" checked="checked"><label for="q545499:7_answer1" class="m-l-1"><span class="answernumber">b. </span>Điểm chạm tiêu cực</label> </div>
<div class="r0"><input type="radio" name="q545499:7_answer" disabled="disabled" value="2" id="q545499:7_answer2"><label for="q545499:7_answer2" class="m-l-1"><span class="answernumber">c. </span>Đây không phải là một điểm chạm</label> </div>
</div></div></div></div></div><div id="q6" class="que multichoice deferredfeedback complete"><div class="info"><h3 class="no">Câu hỏi <span class="qno">10</span></h3><div class="state">Hoàn thành</div><div class="grade">Đạt điểm 1,00 trên 1,00</div><div class="questionflag editable" aria-atomic="true" aria-relevant="text" aria-live="assertive" id="yui_3_17_2_1_1651649018048_105"><input type="hidden" name="q545499:6_:flagged" value="0"><input type="hidden" value="qaid=13094593&amp;qubaid=545499&amp;qid=2313727&amp;slot=6&amp;checksum=47c21bc139313ea07c4b90f2bac33d5e&amp;sesskey=S5dxcsJIMc&amp;newstate=" class="questionflagpostdata">
<input type="hidden" class="questionflagvalue" id="q545499:6_:flaggedcheckbox" name="q545499:6_:flagged" value="0"><input type="image" class="questionflagimage" src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/unflagged.png" title="Đánh cờ câu hỏi này để tham khảo sau" alt="Không gắn cờ"><span class="questionflagtext" title="Đánh cờ câu hỏi này để tham khảo sau">Đặt cờ</span></div></div><div class="content"><div class="formulation clearfix"><h4 class="accesshide">Đoạn văn câu hỏi</h4><input type="hidden" name="q545499:6_:sequencecheck" value="3"><div class="qtext">Đâu là nhận định đúng về vai trò của CBNV VPBank trong việc nâng cao trải nghiệm khách hàng?</div><div class="ablock"><div class="prompt">Chọn nhiều đáp án:</div><div class="answer"><div class="r0"><input type="checkbox" name="q545499:6_choice0" disabled="disabled" value="1" id="q545499:6_choice0"><label for="q545499:6_choice0" class="m-l-1"><span class="answernumber">a. </span>Nâng cao trải nghiệm khách hàng là nhiệm vụ của các CBNV tiếp xúc với khách hàng</label> </div>
<div class="r1"><input type="checkbox" name="q545499:6_choice1" disabled="disabled" value="1" id="q545499:6_choice1" checked="checked"><label for="q545499:6_choice1" class="m-l-1"><span class="answernumber">b. </span>Mỗi CBNV cần nỗ lực cung cấp trải nghiệm tốt nhất tại từng điểm chạm</label> </div>
<div class="r0"><input type="checkbox" name="q545499:6_choice2" disabled="disabled" value="1" id="q545499:6_choice2"><label for="q545499:6_choice2" class="m-l-1"><span class="answernumber">c. </span>Nhiệm vụ nâng cao trải nghiệm khách hàng là của riêng Phòng nâng cao trải nghiệm khách hàng.</label> </div>
<div class="r1"><input type="checkbox" name="q545499:6_choice3" disabled="disabled" value="1" id="q545499:6_choice3" checked="checked"><label for="q545499:6_choice3" class="m-l-1"><span class="answernumber">d. </span>Chủ động và tích cực tham gia các hoạt động hướng tới việc nâng cao trải nghiệm khách hàng</label> </div>
<div class="r0"><input type="checkbox" name="q545499:6_choice4" disabled="disabled" value="1" id="q545499:6_choice4" checked="checked"><label for="q545499:6_choice4" class="m-l-1"><span class="answernumber">e. </span>Lắng nghe ý kiến của khách hàng cả bên ngoài và nội bộ nhằm đưa ra những đề xuất phù hợp.</label> </div>
</div></div></div></div></div><input type="hidden" name="sesskey" value="S5dxcsJIMc"><div class="submitbtns"></div></div></form><div class="submitbtns"><a class="mod_quiz-next-nav" href="https://academy.vpbank.com.vn/learning/mod/quiz/view.php?id=4269">Kết thúc quá trình xem lại</a></div></div>                                        <div class="m-t-2 m-b-1 activity-navigation activity-nav">
<div class="row">
    <div class="col-md-4">        <div class="pull-left">
                <a href="https://academy.vpbank.com.vn/learning/mod/scorm/view.php?id=4267&amp;forceview=1" id="prev-activity-link" class="btn btn-link" title="BÀI HỌC NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG">◀︎ BÀI HỌC NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG</a>

        </div>
</div>
    <div class="col-md-4">        <div class="mdl-align">
            <div class="urlselect">
    <form method="post" action="https://academy.vpbank.com.vn/learning/course/jumpto.php" class="form-inline" id="url_select_f627229f8507dc6">
        <input type="hidden" name="sesskey" value="S5dxcsJIMc">
            <label for="jump-to-activity" class="sr-only">
                Chuyển tới...
            </label>
        <select id="jump-to-activity" class="custom-select urlselect" name="jump">
                    <option value="" selected="">Chuyển tới...</option>
                    <option value="/mod/page/view.php?id=4323&amp;forceview=1">GIỚI THIỆU KHÓA HỌC</option>
                    <option value="/mod/scorm/view.php?id=4267&amp;forceview=1">BÀI HỌC NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG</option>
                    <option value="/mod/certificate/view.php?id=4324&amp;forceview=1">Chứng chỉ Đào tạo Nhận thức trải nghiệm khách hàng</option>
        </select>
            <noscript>
                <input type="submit" class="btn btn-secondary" value="Xem">
            </noscript>
    </form>
</div>

        </div>
</div>
    <div class="col-md-4">        <div class="pull-right">
                <a href="https://academy.vpbank.com.vn/learning/mod/certificate/view.php?id=4324&amp;forceview=1" id="next-activity-link" class="btn btn-link" title="Chứng chỉ Đào tạo Nhận thức trải nghiệm khách hàng">Chứng chỉ Đào tạo Nhận thức trải nghiệm khách hàng ▶︎</a>

        </div>
</div>
</div>
</div>                	                </div>
       		</div>
                            <div class="sidebar-col col-md-3">
                <aside id="block-region-side-pre" class="side-pre style-default block-region" data-blockregion="side-pre" data-droptarget="1"><a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#sb-1" class="sr-only sr-only-focusable">Bỏ qua &lt;span id="mod_quiz_navblock_title"&gt;Bảng câu hỏi&lt;/span&gt;</a>

<section id="mod_quiz_navblock" class=" block block_fake  card mb-3" role="navigation" data-block="_fake" aria-labelledby="instance-0-header">

    <div class="card-body p-3">

            <h5 id="instance-0-header" class="card-title d-inline"><span id="mod_quiz_navblock_title">Bảng câu hỏi</span></h5>


        <div class="card-text content mt-3">
            <div class="qn_buttons clearfix allquestionsononepage"><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton2" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>1<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton10" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q10"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>2<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton1" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q1"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>3<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton8" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q8"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>4<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton5" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q5"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>5<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton4" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q4"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>6<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton9" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q9"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>7<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton3" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q3"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>8<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton7" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q7"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>9<span class="accesshide"> Trang này <span class="flagstate"></span></span></a><a class="qnbutton complete free btn btn-secondary thispage" id="quiznavbutton6" title="Hoàn thành" data-quiz-page="0" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#q6"><span class="thispageholder"></span><span class="trafficlight"></span><span class="accesshide">Question </span>10<span class="accesshide"> Trang này <span class="flagstate"></span></span></a></div><div class="othernav"><a class="mod_quiz-next-nav" href="https://academy.vpbank.com.vn/learning/mod/quiz/view.php?id=4269">Kết thúc quá trình xem lại</a></div>
            <div class="footer"></div>
            
        </div>

    </div>

</section>

  <span id="sb-1"></span></aside>                </div>
                	</div>
	</div>
</div>
<div id="message-drawer-627229f85d55f627229f8507dc7" class="message-drawer mb2-message-drawer message-app drawer bg-light hidden" aria-expanded="false" aria-hidden="true" data-region="message-drawer" role="region">
    <div class="drawer-top">
        <a id="message-drawer-close-627229f85d55f627229f8507dc7" class="" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#">
            <i class="icon fa fa-window-close fa-fw " title="Toggle messaging drawer" aria-label="Toggle messaging drawer"></i>
        </a>
    </div>
    <div class="header-container position-relative" data-region="header-container">
        <div class="hidden border-bottom px-2 py-3" aria-hidden="true" data-region="view-contacts">
            <div class="d-flex align-items-center">
                <div class="align-self-stretch">
                    <a class="h-100 d-flex align-items-center mr-2" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-route-back="" role="button">
                        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
                        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>                    </a>
                </div>
                <div>
                    Liên lạc
                </div>
                <div class="ml-auto">
                    <a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-route="view-search" role="button" aria-label="Tìm kiếm">
                        <i class="icon fa fa-search fa-fw " aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>        
        <div class="hidden bg-white position-relative border-bottom px-2 py-2" aria-hidden="true" data-region="view-conversation">
            <div class="hidden" data-region="header-content"></div>
            <div class="hidden" data-region="header-edit-mode">
                
                <div class="d-flex p-2 align-items-center">
                    Messages selected:
                    <span class="ml-1" data-region="message-selected-court">1</span>
                    <button type="button" class="ml-auto close" aria-label="Cancel message selection" data-action="cancel-edit-mode">
                            <span aria-hidden="true">×</span>
                    </button>
                </div>
            </div>
            <div data-region="header-placeholder">
                <div class="d-flex">
                    <div class="align-self-stretch">
                        <a class="h-100 mr-2 d-flex align-items-center" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-route-back="" role="button">
                            <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
                            <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>                        </a>
                    </div>
                    <div class="ml-2 rounded-circle bg-pulse-grey align-self-center" style="height: 38px; width: 38px">
                    </div>
                    <div class="ml-2 " style="flex: 1">
                        <div class="mt-1 bg-pulse-grey w-75" style="height: 16px;">
                        </div>
                    </div>
                    <div class="ml-2 bg-pulse-grey align-self-center" style="height: 16px; width: 20px">
                    </div>
                </div>
            </div>
            <div class="hidden position-absolute" data-region="confirm-dialogue-container" style="top: 0; bottom: -1px; right: 0; left: 0; background: rgba(0,0,0,0.3);"></div>
        </div>        <div class="border-bottom px-2 py-3" aria-hidden="false" data-region="view-overview">
            <div class="d-flex align-items-center">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text pr-0 bg-white">
                            <i class="icon fa fa-search fa-fw " aria-hidden="true"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control border-left-0" placeholder="Tìm kiếm" aria-label="Tìm kiếm" data-region="view-overview-search-input">
                </div>
                <div class="ml-2">
                    <a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-route="view-settings" data-route-param="9052" aria-label="Cài đặt" role="button">
                        <i class="icon fa fa-cog fa-fw " aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="text-right mt-3">
                <a href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-route="view-contacts" role="button">
                    <i class="icon fa fa-user fa-fw " aria-hidden="true"></i>
                    Liên lạc
                    <span class="badge bg-primary ml-2 hidden" data-region="contact-request-count" aria-label="There are 0 pending contact requests">
                        0
                    </span>
                </a>
            </div>
        </div>
        
        <div class="hidden border-bottom px-2 py-3 view-search" aria-hidden="true" data-region="view-search">
            <div class="d-flex align-items-center">
                <a class="mr-2 align-self-stretch d-flex align-items-center" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-route-back="" data-action="cancel-search" role="button">
                    <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
                    <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>                </a>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Tìm kiếm" data-region="search-input">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" data-action="search" aria-label="Tìm kiếm">
                            <span data-region="search-icon-container">
                                <i class="icon fa fa-search fa-fw " aria-hidden="true"></i>
                            </span>
                            <span class="hidden" data-region="loading-icon-container">
                                <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>        
        <div class="hidden border-bottom px-2 py-3" aria-hidden="true" data-region="view-settings">
            <div class="d-flex align-items-center">
                <div class="align-self-stretch">
                    <a class="h-100 d-flex mr-2 align-items-center" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-route-back="" role="button">
                        <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"></i></span>
                        <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"></i></span>                    </a>
                </div>
                <div>
                    Thiết lập
                </div>
            </div>
        </div>
    </div>
    <div class="body-container position-relative" data-region="body-container">
        
        <div class="hidden" data-region="view-contact" aria-hidden="true">
            <div class="p-2 pt-3" data-region="content-container"></div>
        </div>        <div class="hidden h-100" data-region="view-contacts" aria-hidden="true" data-user-id="9052">
            <div class="d-flex flex-column h-100">
                <div class="p-3 border-bottom">
                    <ul class="nav nav-pills nav-fill" role="tablist">
                        <li class="nav-item">
                            <a id="contacts-tab-627229f85d55f627229f8507dc7" class="nav-link active" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#contacts-tab-panel-627229f85d55f627229f8507dc7" data-toggle="tab" data-action="show-contacts-section" role="tab" aria-controls="contacts-tab-panel-627229f85d55f627229f8507dc7" aria-selected="true">
                                Liên lạc
                            </a>
                        </li>
                        <li class="nav-item">
                            <a id="requests-tab-627229f85d55f627229f8507dc7" class="nav-link" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#requests-tab-panel-627229f85d55f627229f8507dc7" data-toggle="tab" data-action="show-requests-section" role="tab" aria-controls="requests-tab-panel-627229f85d55f627229f8507dc7" aria-selected="false">
                                Requests
                                <span class="badge bg-primary ml-2 hidden" data-region="contact-request-count" aria-label="There are 0 pending contact requests">
                                    0
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tab-content d-flex flex-column h-100">
                            <div class="tab-pane fade show active h-100 lazy-load-list" aria-live="polite" data-region="lazy-load-list" data-user-id="9052" id="contacts-tab-panel-627229f85d55f627229f8507dc7" data-section="contacts" role="tabpanel" aria-labelledby="contacts-tab-627229f85d55f627229f8507dc7">
        
            
            <div class="hidden text-center p-2" data-region="empty-message-container">
                No contacts
            </div>
            <div class="hidden list-group" data-region="content-container">
                
            </div>
            <div class="list-group" data-region="placeholder-container">
                
            </div>
            <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container">
                <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
            </div>
        </div>
        
                            <div class="tab-pane fade h-100 lazy-load-list" aria-live="polite" data-region="lazy-load-list" data-user-id="9052" id="requests-tab-panel-627229f85d55f627229f8507dc7" data-section="requests" role="tabpanel" aria-labelledby="requests-tab-627229f85d55f627229f8507dc7">
        
            
            <div class="hidden text-center p-2" data-region="empty-message-container">
                No contact requests
            </div>
            <div class="hidden list-group" data-region="content-container">
                
            </div>
            <div class="list-group" data-region="placeholder-container">
                
            </div>
            <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container">
                <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
            </div>
        </div>
                </div>
            </div>
        </div>        
        <div class="view-conversation hidden h-100" aria-hidden="true" data-region="view-conversation" data-user-id="9052" data-midnight="1651597200" data-message-poll-min="10" data-message-poll-max="120" data-message-poll-after-max="300" style="overflow-y: auto; overflow-x: hidden">
            <div class="position-relative h-100" data-region="content-container" style="overflow-y: auto; overflow-x: hidden">
                <div class="content-message-container hidden h-100 px-2 pt-0" data-region="content-message-container" role="log" style="overflow-y: auto; overflow-x: hidden">
                    <div class="py-3 bg-light sticky-top z-index-1 border-bottom text-center hidden" data-region="contact-request-sent-message-container">
                        <p class="m-0">Contact request sent</p>
                        <p class="font-italic font-weight-light" data-region="text"></p>
                    </div>
                    <div class="hidden text-center p-3" data-region="more-messages-loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</div>
                </div>
                <div class="p-4 w-100 h-100 hidden position-absolute" data-region="confirm-dialogue-container" style="top: 0; background: rgba(0,0,0,0.3);">
                    
                    <div class="p-3 bg-white" data-region="confirm-dialogue" role="alert">
                        <h3 class="h6 hidden" data-region="dialogue-header"></h3>
                        <p class="text-muted" data-region="dialogue-text"></p>
                        <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-block">
                            <span data-region="dialogue-button-text">Khối</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-unblock">
                            <span data-region="dialogue-button-text">Unblock</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-remove-contact">
                            <span data-region="dialogue-button-text">Xoá</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-add-contact">
                            <span data-region="dialogue-button-text">Thêm</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-delete-selected-messages">
                            <span data-region="dialogue-button-text">Xoá</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-delete-conversation">
                            <span data-region="dialogue-button-text">Xoá</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-primary btn-block hidden" data-action="request-add-contact">
                            <span data-region="dialogue-button-text">Send contact request</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-primary btn-block hidden" data-action="accept-contact-request">
                            <span data-region="dialogue-button-text">Accept and add to contacts</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-secondary btn-block hidden" data-action="decline-contact-request">
                            <span data-region="dialogue-button-text">Decline</span>
                            <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        </button>
                        <button type="button" class="btn btn-secondary btn-block" data-action="cancel-confirm">Huỷ bỏ</button>
                    </div>
                </div>
                <div class="px-2 pb-2 pt-0" data-region="content-placeholder">
                    <div class="h-100 d-flex flex-column">
                        <div class="px-2 pb-2 pt-0 bg-light h-100" style="overflow-y: auto">
                            <div class="mt-4">
                                <div class="mb-4">
                                    <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                            </div>                            <div class="mt-4">
                                <div class="mb-4">
                                    <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                            </div>                            <div class="mt-4">
                                <div class="mb-4">
                                    <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                            </div>                            <div class="mt-4">
                                <div class="mb-4">
                                    <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                            </div>                            <div class="mt-4">
                                <div class="mb-4">
                                    <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                                <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="mr-2">
                                            <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                        </div>
                                        <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                        <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                    </div>
                                    <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                    <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                </div>
                            </div>                        </div>
                    </div>                </div>
            </div>
        </div>
        
        <div class="hidden" aria-hidden="true" data-region="view-group-info">
            <div class="pt-3 h-100 d-flex flex-column" data-region="group-info-content-container" style="overflow-y: auto"></div>
        </div>        <div class="h-100 view-overview-body" aria-hidden="false" data-region="view-overview" data-user-id="9052">
            <div id="message-drawer-view-overview-container" class="d-flex flex-column h-100" style="overflow-y: auto">
                    
                    
                    <div class="section border-0 card" data-region="view-overview-favourites">
                        <div id="view-overview-favourites-toggle" class="card-header p-0" data-region="toggle">
                            <button class="btn btn-link w-100 text-left p-2 d-flex align-items-center overview-section-toggle collapsed" data-toggle="collapse" data-target="#view-overview-favourites-target" aria-expanded="false" aria-controls="view-overview-favourites-target">
                                <span class="collapsed-icon-container">
                                    <i class="icon fa fa-caret-right fa-fw " aria-hidden="true"></i>
                                </span>
                                <span class="expanded-icon-container">
                                    <i class="icon fa fa-caret-down fa-fw " aria-hidden="true"></i>
                                </span>
                                <span class="font-weight-bold">Starred</span>
                                <small class="hidden ml-1" data-region="section-total-count-container" aria-label=" total conversations">
                                    (<span data-region="section-total-count"></span>)
                                </small>
                                <span class="hidden ml-2" data-region="loading-icon-container">
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
                                </span>
                                <span class="hidden badge badge-pill badge-primary ml-auto bg-primary" data-region="section-unread-count">
                                    
                                </span>
                            </button>
                        </div>
                                            <div class="collapse border-bottom  lazy-load-list" aria-live="polite" data-region="lazy-load-list" data-user-id="9052" id="view-overview-favourites-target" aria-labelledby="view-overview-favourites-toggle" data-parent="#message-drawer-view-overview-container">
                    
                        
                        <div class="hidden text-center p-2" data-region="empty-message-container">
                                    <p class="text-muted mt-2">No starred conversations</p>

                        </div>
                        <div class="hidden list-group" data-region="content-container">
                            
                        </div>
                        <div class="list-group" data-region="placeholder-container">
                                    <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</div>

                        </div>
                        <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container">
                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
                        </div>
                    </div>
                    </div>
                    
                    
                    <div class="section border-0 card" data-region="view-overview-group-messages">
                        <div id="view-overview-group-messages-toggle" class="card-header p-0" data-region="toggle">
                            <button class="btn btn-link w-100 text-left p-2 d-flex align-items-center overview-section-toggle collapsed" data-toggle="collapse" data-target="#view-overview-group-messages-target" aria-expanded="false" aria-controls="view-overview-group-messages-target">
                                <span class="collapsed-icon-container">
                                    <i class="icon fa fa-caret-right fa-fw " aria-hidden="true"></i>
                                </span>
                                <span class="expanded-icon-container">
                                    <i class="icon fa fa-caret-down fa-fw " aria-hidden="true"></i>
                                </span>
                                <span class="font-weight-bold">Group</span>
                                <small class="hidden ml-1" data-region="section-total-count-container" aria-label=" total conversations">
                                    (<span data-region="section-total-count"></span>)
                                </small>
                                <span class="hidden ml-2" data-region="loading-icon-container">
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
                                </span>
                                <span class="hidden badge badge-pill badge-primary ml-auto bg-primary" data-region="section-unread-count">
                                    
                                </span>
                            </button>
                        </div>
                                            <div class="collapse border-bottom  lazy-load-list" aria-live="polite" data-region="lazy-load-list" data-user-id="9052" id="view-overview-group-messages-target" aria-labelledby="view-overview-group-messages-toggle" data-parent="#message-drawer-view-overview-container">
                    
                        
                        <div class="hidden text-center p-2" data-region="empty-message-container">
                                    <p class="text-muted mt-2">No group conversations</p>

                        </div>
                        <div class="hidden list-group" data-region="content-container">
                            
                        </div>
                        <div class="list-group" data-region="placeholder-container">
                                    <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</div>

                        </div>
                        <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container">
                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
                        </div>
                    </div>
                    </div>
                    
                    
                    <div class="section border-0 card" data-region="view-overview-messages">
                        <div id="view-overview-messages-toggle" class="card-header p-0" data-region="toggle">
                            <button class="btn btn-link w-100 text-left p-2 d-flex align-items-center overview-section-toggle collapsed" data-toggle="collapse" data-target="#view-overview-messages-target" aria-expanded="false" aria-controls="view-overview-messages-target">
                                <span class="collapsed-icon-container">
                                    <i class="icon fa fa-caret-right fa-fw " aria-hidden="true"></i>
                                </span>
                                <span class="expanded-icon-container">
                                    <i class="icon fa fa-caret-down fa-fw " aria-hidden="true"></i>
                                </span>
                                <span class="font-weight-bold">Private</span>
                                <small class="hidden ml-1" data-region="section-total-count-container" aria-label=" total conversations">
                                    (<span data-region="section-total-count"></span>)
                                </small>
                                <span class="hidden ml-2" data-region="loading-icon-container">
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
                                </span>
                                <span class="hidden badge badge-pill badge-primary ml-auto bg-primary" data-region="section-unread-count">
                                    
                                </span>
                            </button>
                        </div>
                                            <div class="collapse border-bottom  lazy-load-list" aria-live="polite" data-region="lazy-load-list" data-user-id="9052" id="view-overview-messages-target" aria-labelledby="view-overview-messages-toggle" data-parent="#message-drawer-view-overview-container">
                    
                        
                        <div class="hidden text-center p-2" data-region="empty-message-container">
                                    <p class="text-muted mt-2">No private conversations</p>

                        </div>
                        <div class="hidden list-group" data-region="content-container">
                            
                        </div>
                        <div class="list-group" data-region="placeholder-container">
                                    <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</div>

                        </div>
                        <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container">
                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        
        <div data-region="view-search" aria-hidden="true" class="h-100 hidden" data-user-id="9052" data-users-offset="0" data-messages-offset="0" style="overflow-y: auto">
            <div class="hidden" data-region="search-results-container" style="overflow-y: auto">
                
                <div class="d-flex flex-column">
                    <div class="mb-3 bg-white" data-region="all-contacts-container">
                        <div data-region="contacts-container" class="pt-2">
                            <h4 class="h6 px-2">Liên lạc</h4>
                            <div class="list-group" data-region="list"></div>
                        </div>
                        <div data-region="non-contacts-container" class="pt-2 border-top">
                            <h4 class="h6 px-2">Non-contacts</h4>
                            <div class="list-group" data-region="list"></div>
                        </div>
                        <div class="text-right">
                            <button class="btn btn-link text-primary" data-action="load-more-users">
                                <span data-region="button-text">Load more</span>
                                <span data-region="loading-icon-container" class="hidden"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                            </button>
                        </div>
                    </div>
                    <div class="bg-white" data-region="messages-container">
                        <h4 class="h6 px-2 pt-2">Tin nhắn</h4>
                        <div class="list-group" data-region="list"></div>
                        <div class="text-right">
                            <button class="btn btn-link text-primary" data-action="load-more-messages">
                                <span data-region="button-text">Load more</span>
                                <span data-region="loading-icon-container" class="hidden"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                            </button>
                        </div>
                    </div>
                    <p class="hidden p-3 text-center" data-region="no-results-container">Không có kết quả nào</p>
                </div>            </div>
            <div class="hidden" data-region="loading-placeholder">
                <div class="text-center pt-3 icon-size-4"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</div>
            </div>
            <div class="p-3 text-center" data-region="empty-message-container">
                <p>Tìm người và tin nhắn</p>
            </div>
        </div>        
        <div class="h-100 hidden bg-white" aria-hidden="true" data-region="view-settings">
            <div class="hidden" data-region="content-container">
                
                <div data-region="settings" class="p-3">
                    <h3 class="h6 font-weight-bold">Privacy</h3>
                    <p>You can restrict who can message you</p>
                    <div data-preference="blocknoncontacts" class="mb-3">
                            <div class="custom-control custom-radio mb-2">
                                <input type="radio" name="message_blocknoncontacts" class="custom-control-input" id="block-noncontacts-627229f85d55f627229f8507dc7-1" value="1">
                                <label class="custom-control-label ml-2" for="block-noncontacts-627229f85d55f627229f8507dc7-1">
                                    My contacts only
                                </label>
                            </div>
                            <div class="custom-control custom-radio mb-2">
                                <input type="radio" name="message_blocknoncontacts" class="custom-control-input" id="block-noncontacts-627229f85d55f627229f8507dc7-0" value="0">
                                <label class="custom-control-label ml-2" for="block-noncontacts-627229f85d55f627229f8507dc7-0">
                                    My contacts and anyone in my courses
                                </label>
                            </div>
                    </div>
                
                    <div class="hidden" data-region="notification-preference-container">
                        <h3 class="mb-2 mt-4 h6 font-weight-bold">Tùy chọn thông báo</h3>
                    </div>
                
                    <h3 class="mb-2 mt-4 h6 font-weight-bold">Thông tin chung</h3>
                    <div data-preference="entertosend">
                        <span class="switch">
                            <input type="checkbox" id="enter-to-send-627229f85d55f627229f8507dc7">
                            <label for="enter-to-send-627229f85d55f627229f8507dc7">
                                Use enter to send
                            </label>
                        </span>
                    </div>
                </div>
            </div>
            <div data-region="placeholder-container">
                
                <div class="d-flex flex-column p-3">
                    <div class="w-25 bg-pulse-grey h6" style="height: 18px"></div>
                    <div class="w-75 bg-pulse-grey mb-4" style="height: 18px"></div>
                    <div class="mb-3">
                        <div class="w-100 d-flex mb-3">
                            <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                            <div class="bg-pulse-grey w-50 ml-2" style="height: 18px"></div>
                        </div>
                        <div class="w-100 d-flex mb-3">
                            <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                            <div class="bg-pulse-grey w-50 ml-2" style="height: 18px"></div>
                        </div>
                        <div class="w-100 d-flex mb-3">
                            <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                            <div class="bg-pulse-grey w-50 ml-2" style="height: 18px"></div>
                        </div>
                    </div>
                    <div class="w-50 bg-pulse-grey h6 mb-3 mt-2" style="height: 18px"></div>
                    <div class="mb-4">
                        <div class="w-100 d-flex mb-2 align-items-center">
                            <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                            <div class="bg-pulse-grey w-25 ml-2" style="height: 18px"></div>
                        </div>
                        <div class="w-100 d-flex mb-2 align-items-center">
                            <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                            <div class="bg-pulse-grey w-25 ml-2" style="height: 18px"></div>
                        </div>
                    </div>
                    <div class="w-25 bg-pulse-grey h6 mb-3 mt-2" style="height: 18px"></div>
                    <div class="mb-3">
                        <div class="w-100 d-flex mb-2 align-items-center">
                            <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                            <div class="bg-pulse-grey w-50 ml-2" style="height: 18px"></div>
                        </div>
                    </div>
                </div>            </div>
        </div>    </div>
    <div class="footer-container position-relative" data-region="footer-container">
        
        <div class="hidden border-top bg-white position-relative" aria-hidden="true" data-region="view-conversation" data-enter-to-send="0">
            <div class="hidden p-2" data-region="content-messages-footer-container">
                
                <div class="d-flex mt-1">
                    <textarea dir="auto" data-region="send-message-txt" class="form-control bg-light" rows="3" data-auto-rows="" data-min-rows="3" data-max-rows="5" role="textbox" aria-label="Write a message..." placeholder="Write a message..." style="resize: none"></textarea>
                    <button class="btn btn-link btn-icon icon-size-3 ml-1 mt-auto" aria-label="Gửi tin nhắn" data-action="send-message">
                        <span data-region="send-icon-container"><i class="icon fa fa-paper-plane fa-fw " aria-hidden="true"></i></span>
                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                    </button>
                </div>
            </div>
            <div class="hidden p-2" data-region="content-messages-footer-edit-mode-container">
                
                <div class="d-flex p-3 justify-content-end">
                    <button class="btn btn-link btn-icon my-1 icon-size-4" data-action="delete-selected-messages" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete selected messages">
                        <span data-region="icon-container"><i class="icon fa fa-trash fa-fw " aria-hidden="true"></i></span>
                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                        <span class="sr-only">Delete selected messages</span>
                    </button>
                </div>            </div>
            <div class="hidden bg-secondary p-3" data-region="content-messages-footer-require-contact-container">
                
                <div class="p-3 bg-white">
                    <p data-region="title"></p>
                    <p class="text-muted" data-region="text"></p>
                    <button type="button" class="btn btn-primary btn-block" data-action="request-add-contact">
                        <span data-region="dialogue-button-text">Send contact request</span>
                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                    </button>
                </div>
            </div>
            <div class="hidden bg-secondary p-3" data-region="content-messages-footer-require-unblock-container">
                
                <div class="p-3 bg-white">
                    <p class="text-muted" data-region="text">You have blocked this user.</p>
                    <button type="button" class="btn btn-primary btn-block" data-action="request-unblock">
                        <span data-region="dialogue-button-text">Unblock user</span>
                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading" aria-label="Loading"></i></span>
</span>
                    </button>
                </div>
            </div>
            <div class="hidden bg-secondary p-3" data-region="content-messages-footer-unable-to-message">
                
                <div class="p-3 bg-white">
                    <p class="text-muted" data-region="text">You are unable to message this user</p>
                </div>
            </div>
            <div class="p-2" data-region="placeholder-container">
                <div class="d-flex">
                    <div class="bg-pulse-grey w-100" style="height: 80px"></div>
                    <div class="mx-2 mb-2 align-self-end bg-pulse-grey" style="height: 20px; width: 20px"></div>
                </div>            </div>
            <div class="hidden position-absolute" data-region="confirm-dialogue-container" style="top: -1px; bottom: 0; right: 0; left: 0; background: rgba(0,0,0,0.3);"></div>
        </div>    </div>
</div><div class="mb2notices"></div><div id="bottom-info" class="dark1">
	</div>
<footer id="footer" class="dark1">
	<div class="footer-text-container">
		<div class="container-fluid">
	    	<div class="row">
	        	<div class="col-md-12">
					<p class="footer-text">
						<span>
													Bản quyền © thuộc Ngân hàng TMCP Việt Nam Thịnh Vượng. Học viện VPBank vận hành hệ thống.												</span>
					</p>
											<a class="theme-scrolltt" href="https://academy.vpbank.com.vn/learning/mod/quiz/review.php?attempt=543002&amp;cmid=4269#" data-toggle="tooltip" data-trigger="hover" title="" data-original-title="Scroll to top"><span><i class="fa fa-angle-up" data-scrollspeed="400"></i></span></a>						           	</div>
	        </div>
	    </div>
	</div>
		</footer>
<div class="footer-logo-wrap">
	<div class="footer-logo" style="width:150px;">
		<a href="https://academy.vpbank.com.vn/learning" title="VPBank Learning Academy">
			<img src="./BÀI KIỂM TRA NHẬN THỨC TRẢI NGHIỆM KHÁCH HÀNG_files/logo-trang.png" alt="VPBank Learning Academy">
		</a>
	</div>
</div>
</div><!-- //end #page-b -->
</div><!-- //end #page -->
</div>



`;
    //filter right answers
    var questionGroups = para.getElementsByClassName("que");

    for (var i = 0; i < questionGroups.length; i++) {
        var question = questionGroups[i].getElementsByClassName("qtext")[0].innerHTML;
        var resultObject = questionGroups[i].getElementsByClassName("grade")[0].innerHTML;
        if (resultObject.includes("1,00 trên 1,00")) {
            var answers = questionGroups[i].getElementsByTagName("input");
            for (var j = 0; j < answers.length; j++) {
                if ("radio" == answers[j].getAttribute("type") && "checked" == answers[j].getAttribute("checked")) {
                    map.set(question, answers[j].parentNode.getElementsByTagName("label")[0].getElementsByClassName("answernumber")[0].innerHTML);
                }
            }
        }
    }
    console.log('DONE');
    // for (let [key, value] of map) {
    //     console.log(`${key} = ${value}`);
    // }
}
_initContent();