# 🛫 TRIPLE FE 과제
- 개발 기간: 2022.06.25 ~ 2022.07.01
- [배포 링크 바로가기](https://62bf13878c1376030ad0d31c--resplendent-sable-4f3b57.netlify.app/)  

<img src="https://user-images.githubusercontent.com/65222200/176926536-0b241eac-a880-4fe2-9772-a0fe63527e5f.gif">

## 🛠️ 기술 스택
- React(v18.2.0)
- typescript(v4.5.5)
- styled-components(v5.3.5)
- webpack(v5.72.0)
- babel(v7)
- node(v18.1.0)
- npm(v8.8.0)

## 📄 기술 선정 이유

### **1. React**
- 가상 돔(Virtual DOM)을 이용하여 Operation 단계인 리플로우와 리페인트 연산 과정을 최소화할 수 있어 랜더링 최적화를 이룰 수 있습니다.
- SPA 기반의 라이브러리로서 기존 MPA 방식과 달리 페이지 간 이동 시, 갱신에 필요한 데이터만을 가져오기 때문에 사용자 경험을 높일 수 있습니다.
- 각 뷰에 바인딩 된 client state가 변경되면, 이에 맞는 컴포넌트들을 랜더링하여 화면을 구성하기 때문에 예측 가능한 코드를 작성할 수 있습니다.
- `React(v18.0.0)`부턴 suspense을 통해 비동기적 데이터를 처리할 수 있고, nextJS를 사용하지 않고 client side와 server side 렌더링을 지원하기 때문에
   최신 버전으로 프로젝트를 진행하였습니다.
- 라이브러리이기 때문에 다른 프레임워크나 라이브러리와 함께 사용할 수 있어 확장성에 용이합니다

### **2. typescript**
- 정적 타입 선언으로 인해 컴파일 과정에서 코드 오류를 예측할 수 있는 용이함과 개발자의 의도를 명확하게 파악할 수 있습니다.

### **3. styled-components**
- css-in-js 방식으로서 CSS 모델을 컴포넌트 단위로 추상화할 수 있는 모듈성을 지니고 있어 JavaScript 환경을 최대한 활용할 수 있습니다.
- 공통 컴포넌트를 상속 받아 불필요한 중복 CSS 모델을 사용하는 것을 방지할 수 있으며 확장 또한 가능하기 때문에 효율적 입니다.

### **4. webpack**
- CRA를 통한 보일러 플레이트 템플릿 통해서도 프로젝트 환경을 구축할 수 있으나, 상황에 맞는 세부적인 빌드, 난독화, 경량화를 개발자가 설정할 수 있습니다.
- 개발 단계와 실제 프로덕트 단계를 나누어 프로젝트 환경 세팅을 설정할 수 있어 비지니스 로직을 수립하는 데에 용이합니다.

### **5. babel**
- 브라우저의 다양성에 따른 크로스 브라우징을 위해 고수준의 언어를 인터프리터 단계의 기계어로 번역하여 구조화 시킬 수 있어 해석이 용이한 코드를 출력해주기 때문에 사용하였습니다.
- `tsconfig`을 통해서도 컴파일을 할 수 있으나, 속도 성능 상의 이유와 간편한 설정만으로 typescript를 컴파일 할 수 있는 `@babel/preset-typescript`를 사용하였습니다.


## 6**. 💿 설치 및 실행 방법**

Project Clone

`$ git clone` 

Project Setup

`$ npm install`

Project Start For Development

`$ npm run start`

Project Start For Development

`$ npm run dev`

Project Start For Production

`$ npm run build`


## 🌲 프로젝트 구조

```
📦public
 ┣ 📂images
 ┃ ┣ 📜badge-apple4x.png
 ┃ ┣ 📜play-store2x.png
 ┃ ┗ 📜triple2x.png
 ┗ 📜index.hbs
 
 📦.storybook
 ┣ 📜main.js
 ┗ 📜preview.js
 
📦src
 ┣ 📂components
 ┃ ┣ 📂appLogo
 ┃ ┃ ┣ 📜appLogo.style.ts
 ┃ ┃ ┣ 📜appLogo.tsx
 ┃ ┃ ┣ 📜appLogo.type.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂award
 ┃ ┃ ┣ 📜award.style.ts
 ┃ ┃ ┣ 📜award.tsx
 ┃ ┃ ┣ 📜award.type.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂stat
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜stat.style.ts
 ┃ ┃ ┣ 📜stat.tsx
 ┃ ┃ ┗ 📜stat.type.ts
 ┣ 📂constants
 ┃ ┗ 📜formula.ts
 ┣ 📂hooks
 ┃ ┗ 📜useCount.ts
 ┣ 📂pages
 ┃ ┗ 📂guide
 ┃ ┃ ┣ 📜guide.data.json
 ┃ ┃ ┣ 📜guide.style.ts
 ┃ ┃ ┣ 📜guide.tsx
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┣ 📂const
 ┃ ┃ ┣ 📜color.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜media.ts
 ┃ ┣ 📂mixin
 ┃ ┃ ┣ 📜animation.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜globalStyle.ts
 ┃ ┣ 📜style.d.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┗ 📜calcAcceldProgress.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx

📦webpack-config
 ┣ 📜webpack.common.js
 ┣ 📜webpack.dev.js
 ┗ 📜webpack.prod.js
```

## 📕 레퍼런스

- 이 프로젝트는 <u>[트리플](https://triple.guide/) 기업 과제를 토대로 만들었습니다.
- 해당 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
