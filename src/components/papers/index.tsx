import React from "react"
import { AiOutlineLink } from "react-icons/ai"
import * as PaperStyle from "./papers.module.css"
import ContentWrapper from "../contentWrapper"

const Papers = () => {
  return (
    <ContentWrapper>
      <div>
        <h4>International</h4>
        <ul className={PaperStyle.list}>
          {/* ---------- 2025 ---------- */}
          <li>
            <a href="https://doi.org/10.3390/s25144383">
              H. Jeong, S. Kim, D. Seo and J. W. Kwon. "Source‑Free Domain Adaptation Framework for Rotary Machine Fault Diagnosis," <em>Sensors</em>, 2025.
              <AiOutlineLink />
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.1109/ACCESS.2025.3553714">
              S. Baydadaev, S. Usmankhujaev, K. S. Kim and J. W. Kwon. "Artifacts Extraction from Video Head Impulse Test Data Using Time Series Classification Methods and VOR Gain Analysis," <em>IEEE Access</em>, 2025.
              <AiOutlineLink />
            </a>
          </li>

          {/* ---------- 2024 (month‑desc approx.) ---------- */}
          <li>
            <a href="https://doi.org/10.3390/s24237865">
              H. Jeong, J. Kim, D. Jung and J. W. Kwon. "Deep‑Learning and Dynamic Time Warping‑Based Approaches for the Diagnosis of Reactor Systems," <em>Sensors</em>, 2024.
              <AiOutlineLink />
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.3390/electronics13214253">
              S. Lee, H. Jeong and J. W. Kwon. "Transformer‑Based GAN with Multi‑STFT for Rotating Machinery Vibration Data Analysis," <em>Electronics</em>, 2024.
              <AiOutlineLink />
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.3390/s24061765">
              H. Jeong, S. Jeung, H. Lee and J. W. Kwon. "BiVi‑GAN: Bivariate Vibration GAN," <em>Sensors</em>, 2024.
              <AiOutlineLink />
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.1109/ACCESS.2024.3439586">
              S. W. Lee, J. M. Sung and J. W. Kwon. "Optimizing RGB Convolution on Cortex‑M7 MCU: Approaches for Performance Improvement," <em>IEEE Access</em>, 2024.
              <AiOutlineLink />
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.1109/ACCESS.2024.3488510">
              S. Usmankhujaev, S. Baydadaev and J. W. Kwon. "Perception, Distance Estimation, and Tracking Integration from BEV Representations," <em>IEEE Access</em>, 2024.
              <AiOutlineLink />
            </a>
          </li>

          {/* ---------- 2023 ---------- */}
          <li>
            <a href="https://doi.org/10.3390/s23042103">
              S. Usmankhujaev, S. Baydadaev and J. W. Kwon. "Accurate 3D‑to‑2D Object Distance Estimation from the Mapped Point Cloud Data," <em>Sensors</em>, 2023.
              <AiOutlineLink />
            </a>
          </li>

          {/* ---------- 2022 ---------- */}
          <li>
            <a href="https://doi.org/10.3390/s22010157">
              S. Usmankhujaev, B. Ibrokhimov, S. Baydadaev and J. W. Kwon. "Time Series Classification with InceptionFCN," <em>Sensors</em>, 2022.
              <AiOutlineLink />
            </a>
          </li>

          {/* ---------- 2021 ---------- */}
          <li>
            Seon‑Woo Lee, Ho‑Jun Yang, Mun‑Hyung Lee, Jung‑Moo Choi, Se‑Hwan Yun, Jang‑Woo Kwon, Ji‑Hoon Park, Dong‑Hee Jung, Hye‑Jung Shin. "A Study on the Air Pollution Monitoring Network Algorithm Using Deep Learning," <em>Journal of Convergence for Information Technology</em>, 11(11), 57‑65, 2021.
          </li>
          <li>
            <a href="https://doi.org/10.3390/app11041564">
              S. Lee, H. Yu, H. Yang, I. Song, J. Choi, J. Yang, G. Lim, K. Kim, B. Choi and J. Kwon. "A Study on Deep Learning Application of Vibration Data and Visualization of Defects for Predictive Maintenance of Gravity Acceleration Equipment," <em>Applied Sciences</em>, 2021.
              <AiOutlineLink />
            </a>
          </li>

          {/* ---------- 2020 ---------- */}
          <li>
            A Filament Supply System Capable of Remote Monitoring and Automatic Humidity Control for 3D Printer, <em>Journal of Sensors</em>, 2020
          </li>
          <li>
            Real‑Time, Deep Learning Based Wrong Direction Detection, <em>Applied Sciences‑Basel</em>, 10(7), 2020
          </li>
          <li>
            Extreme Low‑Light Image Enhancement for Surveillance Cameras Using Attention U‑Net, <em>Sensors</em>, 20(2), 2020
          </li>

          {/* ---------- 2019 ---------- */}
          <li>
            <a href="https://doi.org/10.3390/electronics13214253">
              Parallel Image Captioning Using 2D Masked Convolution, <em>Applied Sciences‑Basel</em>, 9(9), 2019
              <AiOutlineLink />
            </a>
          </li>

          {/* ---------- 2018 ---------- */}
          <li>
            Detection of Potholes Using a Deep Convolutional Neural Network, <em>Journal of Universal Computer Science</em>, 24(9), pp. 1244‑1257, 2018
          </li>
          <li>
            A Development of Clinical Decision Support System for Video Head Impulse Test Based on Fuzzy Inference System, <em>Journal of Sensors</em>, 2018
          </li>
          <li>
            Detecting Ghost Targets Using Multilayer Perceptron in Multiple‑Target Tracking, <em>Symmetry‑Basel</em>, 10(1), 2018
          </li>

          {/* ---------- 2016 ---------- */}
          <li>
            Adaptive Image Matching Using Discrimination of Deformable Objects, <em>Symmetry‑Basel</em>, 8(7), 2016
          </li>
          <li>
            Recommendation Application for Video Head Impulse Test Based on Fuzzy Logic Control, <em>Journal of Central South University</em>, 23(5), pp. 1208‑1214, 2016
          </li>

          {/* ---------- 2014 ---------- */}
          <li>
            A Variable Step‑Size Feedback Cancellation Algorithm Based on GSAP for Digital Hearing Aids, <em>IEICE Trans. Fundamentals</em>, E97‑A(7), pp. 1615‑1618, 2014
          </li>
          <li>
            State Machine and Downhill Simplex Approach for Vision‑Based Nighttime Vehicle Detection, <em>ETRI Journal</em>, 36, pp. 439‑449, 2014
          </li>

          {/* ---------- 2013 ---------- */}
          <li>
            A Novel Lattice Reduction Precoding Method, <em>Wireless Personal Communications</em>, 70(1), pp. 283‑293, 2013
          </li>
          <li>
            A Distributed Cooperative MAC Protocol for QoS Improvement and Mobility Support in WiMedia Networks, <em>Wireless Personal Communications</em>, 69(4), pp. 1143‑1164, 2013
          </li>

          {/* ---------- 2012 ---------- */}
          <li>
            Personalized Document Summarization Using Pseudo Relevance Feedback and Semantic Feature, <em>IETE Journal of Research</em>, 58(2), pp. 155‑165, 2012
          </li>

          {/* ---------- 2011 ---------- */}
          <li>
            Effects of the Inclination Direction of Vicinal m‑Plane Sapphire Substrates on the Crystal Quality of m‑Plane GaN Film, <em>Journal of Crystal Growth</em>, 325(1), pp. 85‑88, 2011
          </li>
          <li>
            New Results on Stability Criteria for Neural Networks with Time‑Varying Delays, <em>Chinese Physics B</em>, 20(5), 2011
          </li>
          <li>
            A Digital Coreless Maximum Power Point Tracking Circuit for Thermoelectric Generators, <em>Journal of Electronic Materials</em>, 40(5), pp. 867‑872, 2011
          </li>
          <li>
            Efficient Interference Cancellation Scheme for Wireless Body Area Network, <em>Journal of Communications and Networks</em>, 13(2), pp. 167‑174, 2011
          </li>

          {/* ---------- 2010 ---------- */}
          <li>
            A Novel Opportunistic Greedy Forwarding Scheme in Wireless Sensor Networks, <em>KSII Transactions on Internet and Information Systems</em>, 4(5), 2010
          </li>

          {/* ---------- 2009 ---------- */}
          <li>
            Large‑Scale Joint Rate and Power Allocation Algorithm Combined with Admission Control in Cognitive Radio Networks, <em>Journal of Communications and Networks</em>, 11(2), 2009
          </li>

          {/* ---------- 2006 ---------- */}
          <li>
            Color Preference and Personality Modeling Using Fuzzy Reasoning Rule, <em>Lecture Notes in Computer Science</em>, 3984(2006), 2006
          </li>
          <li>
            An Implementation of the Vectorizing‑Based Automatic Nesting Software NST, <em>Lecture Notes in Computer Science</em>, 3984(2006), 2006
          </li>
        </ul>
      </div>
      <div>
        <h4>Domestic</h4>
        <ul className={PaperStyle.list}>
          <li>
            적대적 생성 신경망을 활용한 비지도 학습 기반의 대기 자료 이상 탐지 알고리즘 연구,
            융합정보논문지, 12권 4호, pp. 260~269, 2022
          </li>
          <li>
            시각장애인을 위한 딥러닝 기반의 실시간 임베디드 보조 시스템 개발에 관한 연구,
            재활복지공학회논문지, 16권 1호, pp. 27~36, 2022
          </li>
          <li>
            심층신경망 모델을 이용한 대기오염망 자료확정 알고리즘 연구,
            융합정보논문지, 11권 11호, pp. 57~65, 2021
          </li>
          <li>
            Faster-RCNN을 이용한 열화상 이미지 처리 및 합성 기법,
            융합정보논문지, 11권 12호, pp. 30~38, 2021
          </li>
          <li>
            N-to-N 브로드캐스팅 시스템을 활용한 실내 객체 위치 추적 시스템
            개발에 관한 연구, 한국 ITS 학회 논문지, 19권 6호, pp. 192~207 , 2020
          </li>
          <li>
            Split-Attention 백본 네트워크를 활용한 차선 인식에 관한 연구, 한국
            ITS 학회 논문지, 19권 5호, pp. 178~188 , 2020
          </li>
          <li>
            심층 신경망의 더블 프루니 기법의 적용 및 성능 분석에 관한 연구, 융합
            정보 논문지, 10권 8호, pp. 23~34 , 2020
          </li>
          <li>
            기계학습을 활용한 부적합 열화상 이미지 판별 시스템, 재활복지공학회
            논문지, 14권 2호, pp. 102~111 , 2020
          </li>
          <li>
            재활 보조 기기를 위한 FDM 3D 프린팅 기반 PLA 출력물의 어닐링에 따른
            최적화, 재활복지공학회 논문지, 14권 1호, pp. 50~58 , 2020
          </li>

          <li>
            DSRC 교통정보 정확도 개선을 위한 품질관리 기준 수립 연구, 한국 ITS
            학 회 논문지, 19권 1호, pp. 44~57 , 2020
          </li>
          <li>열화상 기반 딥러닝 기술, 한국소음진동 공학회 논문집, 2020</li>
          <li>
            한국어 데이터 셋을 이용한 이미지 캡션에 대한 연구, 재활복지공학회논
            문지, 13권 4호, pp. 333~339 , 2019
          </li>
          <li>
            시각장애인을 위한 딥러닝 기반 인물 위주 이미지 캡션 방법, 재활복지
            대공 학회 논문지, 13권 2호, pp. 143~149 , 2019
          </li>

          <li>
            Deep Convolutional Neural Network를 이용한 주차장 차량 계수 시스템,
            한국 ITS 학회 논문지, 17권 5호, pp. 173~187 , 2018
          </li>
          <li>
            대각 측량 방식을 이용한 실내 측위 정확도 개선에 관한 연구, 한국 ITS
            학 회 논문지, 17권 5호, pp. 160~172 , 2018
          </li>
          <li>
            고밀도 그리드 모델과 앵커 모델을 이용한 동적 객체 검지 향상에 관한
            연 구, 한국 ITS 학회 논문지, 17권 3호, pp. 98~110 , 2018
          </li>
          <li>
            듀얼 노즐 FDM 3D프린터를 이용한 정전용량 유연-압력센서 개발 및 분석
            , 재활복지공학회 논문지, 12권 4호, pp. 232~240 , 2018
          </li>
          <li>
            차량 검지를 위한 센서 융합 시스템 구축에 관한 연구, 한국통신학회
            논문 지, 42권 8호, pp. 1599~1610 , 2017
          </li>
          <li>
            차량용 레이더 센서를 위한 다중 타깃 알고리즘의 구현과 평가, 한국 ITS
            학회 논문지, 16권 2호, pp. 105~115 , 2017
          </li>
          <li>
            환경 변화에 강인한 단안 카메라 레이더 적외선 거리계 센서 융합 기반
            교통 정보 수집 시스템 개발, 한국 ITS 학회 논문지, 16권 2호, pp.
            36~54 , 2017
          </li>
          <li>
            레이더 센서와 비전 센서를 활용한 다중 센서 융합 기반 움직임 검지에
            관 한 연구, 한국 ITS 학회 논문지, 16권 2호, pp. 140~152 , 2017
          </li>
          <li>
            Fire Detection using Deep Convolutional Neural Networks for
            Assisting People with Visual Impairments in an Emergency Situation ,
            재활복지, 21권 3호, pp. 129~146 , 2017
          </li>
          <li>
            관성센서를 이용한 양궁 자세 분석 시스템 구축 및 평가, 전기 학회
            논문지 , 65권 10호, pp. 1746~1754 , 2016
          </li>
          <li>
            머신러닝을 이용한 앉은 자세 분류 연구, 전기 학회 논문지, 65권 9호,
            pp. 1557~1563 , 2016
          </li>
          <li>
            3축 가속도 센서와 족압 감지 시스템을 활용한 보행 모니터링 시스템 개
            발, 재활복지공학회 논문지, 10권 3호, pp. 199~206 , 2016
          </li>
          <li>
            EEG 신호 정확도 향상을 위한 시뮬레이션 소프트웨어 개발, 재활복지
            대공 학회 논문지, 10권 3호, pp. 221~228 , 2016
          </li>
          <li>
            시각 장애인의 안전 횡단을 위한 도로 위의 차량 검출 알고리즘 제안, 재
            활본지, 20권 2호, pp. 199~211 , 2016
          </li>
          <li>
            인코더, 가속도, 근전도 센서 기반의 보행 불균형 판단 시스템 연구,
            재활 복지공학회 논문지, 10권 2호, pp. 155~162 , 2016
          </li>
          <li>
            레이저 거리계를 이용한 차량 전장 측정 방법에 관한 연구, 한국 ITS
            학회 논문지, 15권 1호, pp. 66~76 , 2016
          </li>
          <li>
            상보 필터 적용을 통한 장애인 보조 기구용 레이더 데이터 보정 연구,
            재활 복지공학회 논문지, 10권 1호, pp. 29~36 , 2016
          </li>
          <li>
            아마추어 양궁 선수의 풀드 로우에서의 양팔 움직임과 점수 간 상관관계
            연 구, 재활복지공학회 논문지, 10권 1호, pp. 101~106 , 2016
          </li>
          <li>
            차량 검출 GMM 2.0을 적용한 도로 위의 차량 검출 시스템 구축, 한국통신
            학회 논문지, 40권 11호, pp. 2291~2297 , 2015
          </li>
          <li>
            인코더를 이용한 2축 각도 기반 보행 불균형 평가 시스템 연구, Journal
            of Institute of Control, Robotics and Systems , 21권 5호, pp.
            401~406 , 2015
          </li>
          <li>
            음성 검출 기반의 저 연산 이득 제어 알고리즘, 한국통신학회 논문지, 40
            권 5호, pp. 924~930 , 2015
          </li>
          <li>
            UWB 기반 선박 네트워크에서 효율적인 전송 기법, 한국통신학회 논문지,
            39권 11호, pp. 1151~1158 , 2014
          </li>
          <li>
            선박 네트워크에서 스마트 장치간 연결성 향상을 위한릴레이 통신 기법 ,
            한국통신학회논문지 , 39권 11호 , pp. 1167~1176 , 2014
          </li>
          <li>
            선박 내 유선망에서 차등화 서비스 지원을 위한 패킷 폐기 기술,
            한국통신 학회 논문지, 39권 11호, pp. 1177~1184 , 2014
          </li>
          <li>
            물체 탐지 시스템의 개발을 위한 근거리 레이더에 대한 특성 분석,
            한국통 신학회 논문지, 39권 12호, pp. 1267~1279 , 2014
          </li>
          <li>
            일반화된 정규-라플라스 분포를 이용한 음성 검출기, 한국통신학회
            논문지 , 17권 3호, pp. 294~299 , 2014
          </li>
          <li>
            근전도를 이용한 손목 방향인 식 모듈에 관한 연구, 재활복지공학회
            논문지 , 7권 1호, pp. 51~58 , 2013
          </li>
          <li>
            보행보조로봇의 일상생활 지원을 위한 고령자 기억 보조 기법에 관한
            연구 , 재활복지, 16권 2호, pp. 261~286 , 2012
          </li>
          <li>
            IT 멘토링 제도에 대한 평가 및 발전 방안, 직업교육연구, 13권 6호,
            2010
          </li>
          <li>
            선박 환경에서 Gabor 여파기를 적용한 입술 읽기 성능 향상,
            한국통신학회 논문지, 35권 7호, 2010
          </li>
          <li>
            LEACH 프로토콜 기반 망 수명 개선 알고리즘, 한국통신학회 논문지, 35
            권 8호, 2010
          </li>
          <li>
            상황인식 기반 해양 디지털 선박 상황 진단 시스템 구현 및 설계, 한국통
            신학회 논문지, 35권 6호, 2010
          </li>
          <li>
            실내 측위 결정을 위한 Fingerprinting Bayesian 알고리즘, 한국통신학회
            논문지, 35권 6호, 2010
          </li>
          <li>
            EPC RFID 동작 방식의 번 능동형 센서 태그 개발을 위한 SiP 개발
            플랫폼, 한국 차세대 컴퓨팅학회 논문지, 6권 2호, 2010
          </li>
          <li>
            IT 분야 공학교육인증 이수자의 실무역량에 대한 기업과 졸업생 인식 비
            교, 직업교육연구, 29권 1호, 2010
          </li>
          <li>
            외국인 인재 유치 및 활용을 위한 정책 모형 연구, 한국콘텐츠학회 논문
            지, 10권 3호, 2010
          </li>
          <li>
            해상 응급환자를 위한 원격진료시스템 설계 및 구현, 한국 해양정보통
            신학 회 논문지, 13권 3호, 2009
          </li>
          <li>
            뇌파 기반 집중도 전송 및 BCI 적용에 관한 연구, 전자공학회 논문지, 46
            권 2호, 2009
          </li>
          <li>
            EPID와 FRST를 이용한 치료 표적 위치 검증에 관한 연구, 전자공학회논
            문지, 46권 3호, 2009
          </li>
          <li>
            PTTL을 이용한 수축기 혈압 추정, 전기 학회 논문지, 57권 6호, 2008
          </li>
          <li>
            뉴로-퍼지를 이용한 스펙클 제거, 전기 전자 학회 논문지, 12권 3호,
            2008
          </li>
          <li>
            네트워크 보드게임에서의 임의 종료 관리 시스템에 대한 연구, 감성과학
            , 10권 3호, 2007
          </li>
          <li>
            개선된 클로버 알고리즘을 이용한 컨테이너 작업 스케줄링에 관한 연구,
            한국 해양정보통신학회 논문지, 11권 10호, 2007
          </li>
          <li>
            영상 정보를 이용한 가스 벤트 자동교환 장치, 한국 해양정보통신학회
            논문 지, 11권 6호, pp. 1141~1149 , 2007
          </li>
          <li>
            유전자 알고리즘과 신경망을 이용한 MMORPG의 지능 캐릭터 구현에 관 한
            연구, 멀티미디어학회 논문지, 10권 5호, 2007
          </li>
          <li>
            Adaboost 기반의 실시간 고속 얼굴 검출 및 추적 시스템의 개발, 제어·로
            봇·시스템학회 논문지, 13권 11호, 2007
          </li>
          <li>
            복부 근전도 분석을 통한 복부 비만 측정 시스템 개발, 센서학회지, 16권
            5호, 2007
          </li>
          <li>
            GIS 피뢰설비 관리를 위한 전문가 시스템 구현, 조명 전기 설비학회
            논문지 , 21권 1호, 2007
          </li>
          <li>
            대지 전계 측정을 위한 필 듯 밀의 설계 및 제작, 조명 전기 설비학회
            논문지, 27권 1호, 2007
          </li>
          <li>
            MFCC-HMM-GMM을 이용한 근전도(EMG) 신호 패턴인식, 의공 학회지, 27권
            5호, 2006
          </li>
          <li>
            채널별 음장 분포 분석을 통한 진단용 초음파 어레이 프로브의 평가
            방법에 관한 연구, 의공 학회지, 27권 5호, 2006
          </li>
          <li>
            신발 금형의 가스 배출량 측정 장치와 영상 정보를 이용한 가스 벤트
            자동 교환 시스템의 개발, 센서학회지, 15권 1호, 2006
          </li>
          <li>
            방전 신호 검출에 의한 전기화재 예측, 한국 해양정보통신학회 논문지, 8
            권 2호, 2004
          </li>
          <li>
            텍스처 분석에 의한 피혁 등급 판정 및 자동 선별시스템에의 응용,
            멀티미 디어 학회 논문지, 7권 4호, 2004
          </li>
        </ul>
      </div>
      <div>
        <h4>Patent</h4>
        <ul className={PaperStyle.list}>
          <li>블랙 아이스를 검출하는 방법 및 장치, 2021</li>
          <li>복합 대각 측량법을 이용한 실내 위치 측위 방법 및 시스템, 2021</li>
          <li>
            레이더 장치와 영상 처리를 이용하여 차종, 속도, 통행량을 검지하는
            장치 및 방법, 2021
          </li>
          <li>딥러닝 기반의 어노테이션 툴을 제공하는 방법 및 시스템, 2021</li>
          <li>
            딥러닝 방법을 이용한 비디오 두부 충동 검사를 위한 임상 의사 결정
            지원 시스템, 2021
          </li>
          <li>
            도로 주행 중에 휴대폰 사용을 방지하기 위한 인터페이스 장치 및 방법,
            2021
          </li>
          <li>
            다개수 다각형의 종이를 단일 접기로 접는 방법 및 시스템, 상기 종이
            접는 방법을 저장하는 방법, 2021
          </li>
          <li>고성능 보청기 및 그의 동작 방법, 2021</li>
          <li>3차원 열화상 카메라, 2021</li>
          <li>
            규칙 기반 알고리즘을 이용한 대기질 데이터의 이상 판정 방법 및
            시스템, 2021
          </li>
          <li>
            지도 학습 모델 및 비지도 학습 모델의 앙상블 구조를 이용한 대기질
            데이터의 이상 판정 방법 및 시스템, 2021
          </li>
          <li>
            번호판 인식 방법 및 시스템(SYSTEM AND METHOD FOR RECOGNIZING LICENSE
            PLATES), 2020
          </li>
          <li>
            정류장 버스 승차위치 안내용 LED 전광블록(LED LIGHT BLOCK FOR BUS
            STOP LOCATION INFORMATION), 2020
          </li>

          <li>
            드론을 이용한 청소년 프로그래밍 교육용 애플리케이션 시스템
            (Application system for teenager programming education using
            drones), 2020
          </li>

          <li>
            휠체어의 주행 정보 및 사용자의 운전 정보에 기반하여 안전성을 평가하
            는 휠체어 운영 시스템 및 방법(WHEELCHAIR OPERATION SYSTEM AND METHOD
            FOR EVALUATING SAFETY BASED ON WHEELCHAIR'S DRIVING INFORMATION) ,
            2020
          </li>

          <li>
            증강현실 기반 3D 프린터 유지 보수 방법 및 시스템(3D PRINTER MAINTAIN
            METHOD AND SYSTEM WITH AUGMENTED REALITY), 2020
          </li>

          <li>
            대형 출력물의 프린팅을 위한 다중 3D 프린터의 프린팅 스케줄링 방법 및
            시스템(METHOD AND SYSTEM FOR PRINTING SCHEDULING OF MULTIPLE 3D
            PRINTER FOR LARGE PRINTED OUTPUT), 2020
          </li>

          <li>
            펠티어 소자를 이용한 3D 프린터 출력물 탈착용 자동 히팅 베드 냉각 방
            법 및 시스템(METHOD AND SYSTEM FOR COOLING AUTOMATIC HEATING BED FOR
            3D PRINTER OUTPUT DISCONNECTION USING PELTIER EFFECT DEVICE), 2020
          </li>

          <li>
            영상의 쇼트 분류를 이용한 사용자 맞춤형 영상 추천 시스템(Customized
            image recommendation system using shot classification of images),
            2020
          </li>

          <li>
            AI 기반의 스마트 코칭 방법(METHOD FOR SMART COACHING BASED ON
            ARTIFICIAL INTELLIGENCE), 2020
          </li>

          <li>
            3D 프린터 인쇄 정확도 향상을 위한 필라멘트 저장 장치에 관한 방법
            (METHOD FOR FILAMENT STORAGE FOR IMPROVED ACCURACY OF 3D PRINTER
            PRINTING), 2020
          </li>

          <li>골프 드론(Golf Drones), 2020</li>

          <li>
            3D 프린터 이종 재료 출력을 위한 노즐 배합 시스템 구조 및 방법(THE
            STRUCTURE AND METHOD OF NOZZLE MIXING SYSTEM FOR 3D PRINTER
            DIFFERENT MATERIAL OUTPUT), 2020
          </li>

          <li>
            운동 지수 기반의 운동 코칭 방법 및 시스템(METHOD AND SYSTEM FOR
            EXERCISE COACHING BASED ON SPORTS TWIN INDEX), 2020
          </li>

          <li>
            지능형 주차 관리 방법 및 시스템(SYSTEM AND METHOD FOR MANAGING OF
            INTELLIGENT PARKING), 2019
          </li>

          <li>
            교감형 운동 머신 기반의 운동 코칭 방법 및 시스템(METHOD AND SYSTEM
            FOR EXERCISE COACHING BASED ON EXERCISE MACHINE), 2019
          </li>

          <li>
            착용 및 탈거가 쉬운 보청기(A hearing aid with easy wearing and easy
            removing), 2019
          </li>

          <li>
            증강현실을 이용한 3D 프린터 인쇄 물체 정보 표시 시스템 및 방법
            (SYSTEM AND METHOD FOR DISPLAYING PRINTED OBJECT DISPLAY INFORMATION
            BY 3D PRINTER USING AUGMENTED REALITY), 2019
          </li>

          <li>
            3D 프린터 필라멘트 공급 통합 모니터링 장치 및 시스템 그리고 방법
            (APPARATUS, SYSTEM AND METHOD FOR MONITORING FILAMENT OF 3 DIMENSION
            PRINTER), 2019
          </li>

          <li>
            사물인터넷 기반의 창고 관리 방법 및 시스템(SYSTEM AND METHOD FOR
            MANAGING WAREHOUSE BASED ON INTERNET OF THINGS), 2019
          </li>

          <li>
            시청각 장애우들을 위한 버스 및 지하철 점자 손잡이 그리고 점자 안내
            방 법 및 시스템(BRAILLE HANDLE OF BUS AND METRO FOR DEAF AND BLIND
            AND BRAILLE INFORMATION METHOD AND SYSTEM), 2019
          </li>

          <li>
            뇌파 훈련을 위한 실시간 시뮬레이터 및 이를 이용한 인터페이스 장치
            (REALTIME SIMULATOR FOR BRAINWAVES TRAINING AND INTERFACE DEVICE
            USING REALTIME SIMULATOR), 2018
          </li>

          <li>
            컴퓨터 비전을 사용한 교통량 측정 방법 및 시스템(Method and System
            for Traffic Measurement using Computer Vision), 2017
          </li>

          <li>
            LiDAR 센서를 활용한 다중 차로 교통 검지 방법 및 시스템(METHOD AND
            SYSTEM FOR DETECTING MULTILINE VECHILE USING 2D LiDAR), 2017
          </li>

          <li>
            레이저 회전을 이용하여 3차원 물체를 판별하는 장치 및 방법 (APPARATUS
            AND METHOD FOR DETERMING 3D OBJECT USING ROTATION OF LASER), 2017
          </li>

          <li>
            물체 탐지를 위한 레이더 카메라 복합 검지 장치 및 방법(METHOD AND
            APPARATUS FOR DETECTING OBJECT WITH RADAR AND CAMERA), 2017
          </li>

          <li>
            뇌파 훈련을 위한 실시간 시뮬레이터 및 이를 이용한 인터페이스 장치,
            2015
          </li>

          <li>자동 전정기관 이상 판별 시스템, 2015</li>

          <li>무인 비행체 유도 방법 및 장치, 2015</li>

          <li>발포수지 금형의 가스 검출 장치, 2006</li>

          <li>카메라를 이용한 자동 부재 배치 장치, 2006</li>
        </ul>
      </div>
    </ContentWrapper>
  )
}

export default Papers
