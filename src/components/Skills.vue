<template>

    <div id="page" class="container">
        <div id="content">
            <div class="title">
                <h2>보유 기술</h2>
            </div>
			<div id="stwo-col">
				<div class="sbox1">
					<h2>웹/앱 로그 분석 도구</h2>
					<ul class="style2">
						<li>
							<p>Google Analytics</p>
							<progress-bar bar-color="#cd5c5c" size="medium" :val="ga_increasing_pct" :text="ga_increasing_pct + '%'" />
						</li>
						<li>
							<p>Google Tagmanager</p>
							<progress-bar bar-color="#cd5c5c" size="medium" :val="gtm_increasing_pct" :text="gtm_increasing_pct + '%'" />
						</li>
						<li>
							<p>Kochava</p>
							<progress-bar bar-color="#cd5c5c" size="medium" :val="ko_increasing_pct" :text="ko_increasing_pct + '%'" />
						</li>
					</ul>
				</div>
				<div class="sbox2">
					<h2>프로그래밍 언어</h2>
					<ul class="style2">
						<li>
							<p>JavaScript</p>
							<progress-bar bar-color="#cd5c5c" size="medium" :val="java_increasing_pct" :text="java_increasing_pct + '%'" />
						</li>
						<li>
							<p>Vue.js</p>
							<progress-bar bar-color="#cd5c5c" size="medium" :val="vue_increasing_pct" :text="vue_increasing_pct + '%'" />
						</li>
						<li>
							<p>MySql</p>
							<progress-bar bar-color="#cd5c5c" size="medium" :val="sql_increasing_pct" :text="sql_increasing_pct + '%'" />
						</li>
					</ul>
				</div>
			</div>
        </div>

    <div id="sidebar">
            <div class="title">
                <h2>자격증</h2>
            </div>
			<div id="stwo-col">
				<div class="sbox1">
					<h2>취득 자격증</h2>
					<ul class="style2">
						<li>
							<p>ADsP(데이터분석 준전문가)<br>
							<a>취득일 :2020.09</a></p>
						</li>
						<li>
							<p>Facebook Blueprint Media Planning Professional<br>
							<a>취득일 :2020.07</a></p>
						</li>
						<li>
							<p>SQLD(SQL 개발자)<br>
							<a>취득일 :2020.06</a></p>
						</li>
					</ul>
				</div>
				<div class="sbox2">
					<h2>습득 예정 기술 및 자격</h2>
					<ul class="style2">
						<li>
							<p>ADP(데이터분석 전문가)<br>
							<a>취득 예정일 :2021.1Q</a></p>
						</li>
						<li>
							<p>Google BigQuery<br>
							<a>숙련도 : 중급(50%)</a><br>
							<a>취득 예정일 :2021.1Q</a></p>
						</li>
						<li>
							<p>Python<br>
							<a>숙련도 : 중급(50%)</a><br>
							<a>취득 예정일 :2021.1Q</a></p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>


</template>

<script>

import ProgressBar from 'vue-simple-progress'

export default {
	components : {
		ProgressBar
	},
	  data: function() {
    return {
		ga_increasing_pct: 0,
		gtm_increasing_pct: 0,
		ko_increasing_pct: 0,
		java_increasing_pct : 0,
		vue_increasing_pct : 0,
		sql_increasing_pct : 0
    }
  },
  mounted: function() {
    setInterval(() => {
      if (this.is_paused)
        return 
	  this.ga_increasing_pct = Math.min(this.ga_increasing_pct + 5, 80)
	  this.gtm_increasing_pct = Math.min(this.gtm_increasing_pct + 5, 70)
	  this.ko_increasing_pct = Math.min(this.ko_increasing_pct + 5, 50)
	  this.java_increasing_pct = Math.min(this.java_increasing_pct + 5, 50)
	  this.vue_increasing_pct = Math.min(this.vue_increasing_pct + 5, 50)
	  this.sql_increasing_pct = Math.min(this.sql_increasing_pct + 5, 50)
    }, 100)
  }
}
</script>

<style>

</style>