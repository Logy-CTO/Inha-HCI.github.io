import React from "react"
import ContentWrapper from "../contentWrapper"
import * as KSoftwareBootcampStyle from "./ksoftwarebootcamp.module.css"

const KSoftwareBootcamp = () => {
  return (
    <ContentWrapper>
      <div className="top-navigator">
        <div className="nav-title">K-Software<br/>Empowerment<br/>BootCamp</div>
        <div className="menu">수업설명</div>
        <div className="menu">교수진</div>
        <div className="menu">FAQ</div>
        <div className="menu">Contact</div>
      </div>
      <div className="content-container">
        <div className="top-content">
          <div className="title">K-Software<br/>Empowerment<br/>BootCamp</div>
          <img src="../../../assets/prgintro.png"/>
          <h5>인하대학교에서 SW 개발에 관심있는 인재를 양성하고 현업 중심의 프로젝트를 경험할 수 있는 &lt;K-Software BootCamp 2022&gt;를 시작합니다</h5>
        </div>
        <div className="program-intro">
          <div className="1st-title">프로그램 소개</div>
          <h5>본 프로그램은 총 640시간으로 구성되어 있으며 280시간은 대학 연합으로 프로그래밍, SW 기술에 대한 교육으로 360시간은 참여기업 주관의 프로젝트 심화 과목으로 구성되어 있습니다.</h5>
          <div className="2nd-title">대학 연합 개설 교과목</div>
          <h5>3개 소프트웨어 선도 대학(인하대, 성균관대, 경기대 - 소프트웨어 중심대학)에서 개설하는 실습 중심의 강좌를 통해, 프로그래밍 기술과 SW전반에 대한 지식을 쌓을 수 있습니다.<br/><br/>대학 연합에서 주관하는 SW 강좌는 크게 프로그래밍(기초),SW이론교육(기초) , SW기술역량교육(심화) 으로 총 280시간으로 구성되어 있으며 하부 강좌들이 존재합니다.</h5>
          <div className="3rd-title">프로그래밍 기초</div>
          <h5>- SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중 가장 많이 사용되는 언어들에 대한 강의로 구성되어 있습니다.</h5>
          <h5>- 프로그래밍-기초 커리큘럼을 이수하기 위해서는 최소 2과목의 선택과목을 수강하여야 합니다.</h5>
          <div className="elem-box">
            <div className="4th-title">1. C++</div>
            <h5>
            C++ 언어의 문법과 주요 개념을 학습하고 다양한 예제를 통해 프로그래밍 능력을 향상시킨다.
            객체지향 프로그래밍 및 클래스와 객체에 대한 이해, 클래스 설계방법, 클래스 상속, 다형성, 연산자 오 버로딩, STL등을 C++ 언어를 통해 강의하며, 이를 학습한다.
            </h5>
          </div>
          <div className="elem-box">
            <div className="4th-title">2. Python 프로그래밍</div>
            <h5>
            파이썬 프로그래밍 언어는 다양한 분야에서 가장 인기있고 가장 많이 사용되는 언어이다. 파이썬 프로그램 개념과 활용하기 위한 원리와 개념을 배우고 이를 바탕으로 다양한 분야에 응용하는 실무적 방법을 교육한다.
            </h5>
          </div>
          <div className="elem-box">
            <div className="4th-title">3. 웹 프로그래밍(React)</div>
            <h5>
            웹 문서 작성에 사용되는 HTML 설계 및 응용을 다룬다 내용은 구조 표현 포맷 리스트, 링크 이미지 테이블 프레임 폼 등이 포함된다 이를 위해 소개 웹페이지 설계 , 형태 자바스크립트 멀티미디어 웹페이지 등을 소개한다.            </h5>
          </div>
          <div className="elem-box">
            <div className="4th-title">4. JAVA</div>
            <h5>
            자바 프로그래밍 수업으로 객체지향 프로그래밍과 디자인패턴을 중심으로 현장에서 사용할 수 있는 다형성 기법을 습득하는 실무적 교육이다.
            </h5>
          </div>
          <div className="elem-box">
            <div className="4th-title">5. R</div>
            <h5>
            R은 데이터를 분석하는데 사용되는 소프트웨어로써, 기업, 학계, 언론 등 다양한 분야의 데이터 분석가들이 R을 사용하고 있고, 데이터 분석 공부를 시작한 입문자들도 R을 익히고 있습니다. R을 통하여 데이터의 특성을 살펴보는 기초 통계부터 가설검정에 사용되는 고급 통계 분석 기법에 이르기까지 다양한 통계 분석 기법을 활용할 수 있습니다.            </h5>
          </div>
          {/* 이제 SW이론 교육 기초 */}
          <div className="3rd-title">SW이론교육(기초)</div>
          <h5>- SW개발은 단순히 언어를 잘하는 것이 아니라 다양한 문제를 해결할 수 있는 능력이 중요합니다.</h5>
          <h5>- SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.</h5>
          <h5>- SW이론교육-기초 커리큘럼을 이수하기 위해서는 2가지 필수 과목을 수강하여야 합니다.</h5>
          <div className="elem-box">
            <div className="4th-title">1. 알고리즘+자료구조</div>
            <h5>
            본 과목의 목적은 컴퓨터 응용에서의 문제들을 풀기 위한 다양한 알고리즘과 알고리즘분석에 필요한 기본 법칙과 기술을 소개하는데 있다 컴퓨터 중심의 실제 문제들의 해결에 필요한 다양한 자료구조들의 사용법과 알고리즘 기술에 필요한 원칙과 기법에 대해서 소개하는 데 있다 본 과목에서 다루는 주제들로는 배열 스텍 큐 연결리스트 트리 ,그래프, 정렬, 해싱, AVL 트리 등으로 요약될 수 있다.
            </h5>
          </div>
          <div className="elem-box">
            <div className="4th-title">2. 데이터베이스</div>
            <h5>
            데이터베이스 관리 시스템의 개념, ER디자인, 관계형 모델, 정규화기법, 계층형 모델, 망 모델 그리고 파일조직 등으로 요약될 수 있다
            </h5>
          </div>
          {/* 이제 SW이론 교육 기초 */}
          <div className="3rd-title">SW이론교육(기초)</div>
          <h5>- SW개발은 단순히 언어를 잘하는 것이 아니라 다양한 문제를 해결할 수 있는 능력이 중요합니다.</h5>
          <h5>- SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.</h5>
          <h5>- SW이론교육-기초 커리큘럼을 이수하기 위해서는 2가지 필수 과목을 수강하여야 합니다.</h5>
          <div className="elem-box">
            <div className="4th-title">1. 알고리즘+자료구조</div>
            <h5>
            본 과목의 목적은 컴퓨터 응용에서의 문제들을 풀기 위한 다양한 알고리즘과 알고리즘분석에 필요한 기본 법칙과 기술을 소개하는데 있다 컴퓨터 중심의 실제 문제들의 해결에 필요한 다양한 자료구조들의 사용법과 알고리즘 기술에 필요한 원칙과 기법에 대해서 소개하는 데 있다 본 과목에서 다루는 주제들로는 배열 스텍 큐 연결리스트 트리 ,그래프, 정렬, 해싱, AVL 트리 등으로 요약될 수 있다.
            </h5>
          </div>
          <div className="elem-box">
            <div className="4th-title">2. 데이터베이스</div>
            <h5>
            데이터베이스 관리 시스템의 개념, ER디자인, 관계형 모델, 정규화기법, 계층형 모델, 망 모델 그리고 파일조직 등으로 요약될 수 있다
            </h5>
          </div>
      </div>
      </div>
    </ContentWrapper>
  )
}

export default KSoftwareBootcamp
