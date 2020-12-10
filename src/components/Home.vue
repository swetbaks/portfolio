<template>

<div id="page" class="container">
	<div id="content">
		<div class="title">
			<h2>제 포트폴리오에 오신 걸 환영합니다.</h2>
			<span class="byline">퍼포먼스 마케터 정권채</span> </div>
		<a href="#" class="image image-full"><img :src="pictures.pic1" alt="" /></a>
		<p>
			5년차 퍼포먼스 마케터이자 데이터 분석가.
		<br>다양한 광고 캠페인 운영 및 광고 데이터 수집 체계 수립 경험 보유
		</p>
	</div>
	<div id="sidebar">
		<ul class="style1">
			<li class="first">
				<h3>엠포스 마케팅본부 프로</h3>
				<p>
					재직 기간 : 2019.06 ~ (재직중)
				<br>담당 광고주 : LGU+, OK저축은행
				<br>참여 TF : 현대카드 2021년 온라인마케팅 제안 TF, 우리카드 2020년 온라인마케팅 제안 TF 외 다수
				</p>
			</li>
			<li>
				<h3>해커스교육그룹 공무원기획 마케팅 프로</h3>
				<p>
					재직 기간 : 2015.12 ~ 2019.06
				<br>담당 브랜드 : 18개 브랜드 중 11개 브랜드 온라인광고 담당
				<br>참여 프로젝트 : 2018년 공인중개사 코엑스 설명회, 2017년 해커스어학원 토스/오픽 10일 끝장반 TF, 2017년 해커스어학원 여름방학 무료예약 등 다수
				</p>
			</li>
		</ul>
	</div>
</div>

</template>

<script>

export default {

	data() {
		return {
			pictures : {
				pic1 : 'https://i.ibb.co/YhQ4kbW/eeetc00350000032.jpg'
			}
		}
	}

}
</script>

<style>

</style>