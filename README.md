# 목적

아래의 리스트를 공부하고 적용한다.

- 무한 스크롤
- bright / dark theme
- typeScript
- redux

## 기획

- 독서 및 기록 앱
- 네이버 api를 활용하여 책 검색 웹앱을 만든다
- 책에 별점과 한줄평을 남길 수 있다.
- 책의 주요 정보를 확인할 수 있다.

## 주요 기능

- 검색어 자동완성
- 무한 스크롤

# 주요 코드

## 1

# 문제 해결 경험

## 무한 스크롤을 리덕스로 만들 때

### 문제

-

### 원인

- 초기 검색과, 무한스크롤을 위한 추가 검색의 판별이 필요
- 초기 검색에 필요한 로딩인지, 추가 검색에 필요한 로딩인지 판별 필요

### 해결

- 다양한 케이스에 해당하는 `action type`을 생성하여 적용함

### 코드

검색과 관련된 액션 타입

```js
interface InitialState {
  success: boolean;
  isLoading?: boolean;
  hasMore?: boolean;
  isError?: boolean;
  data?: Book[] | null;
  pageNumber: number;
  query: string;
  loadMore?: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  isError: false,
  success: false,
  data: null,
  pageNumber: 1,
  query: '',
  loadMore: false,
};

const BookReducer = (
  state = initialState,
  action: fetchDispatchType
): InitialState => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        success: false,
        isError: true,
        pageNumber: 1,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        data: action.data,
        isError: false,
        hasMore: action.hasMore,
        query: action.query,
      };

    case LOAD_MORE_DATA:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        loadMore: true,
      };

    case LOAD_MORE_SUCCESS:
      return {
        ...state,
        data: action.data,
        hasMore: action.hasMore,
        loadMore: false,
        isLoading: false,
      };

    case CANCLE_FETCH:
      return {
        ...state,
        data: [],
        isLoading: false,
        success: false,
        pageNumber: 1,
      };

    case NEW_FETCH:
      return {
        ...state,
        pageNumber: 1,
      };

    default:
      return state;
  }
};
```

## 검색어를 변경할 때 스크롤 위치로 인한 추가 검색

### 문제

- 다른 검색어로 검색할 때, 기본 검색양이 8개이지만, 스크롤 위치에 따라 8개 이상의 검색결과가 나옴

### 원인

- 검색어를 변경하여도, 스크롤 위치가 유지됨

### 해결

#### 방법1)

- 자료구조 `stack`방식을 사용하여, 이전 검색어와 다른 검색어일 경우
  `window.scroll(0,0)`으로 스크롤을 올리려 하였으나 안됨
- 근데 이거 적용위치가 달라서 그런거 아닌가 몰라 🤔 다른 컴포넌트에다 하면 될지도...?

## 모달

### 첫번째 문제

- react-router-dom에서 제공하는 기능을 이용하여, 모달에도 url을 설정하려고 하였음.
- 공식홈페이지에서 제공하는 [예시](https://reactrouter.com/web/example/modal-gallery)를 참고함.

#### 원인

- 예시와 같이 해당 페이지에 `state`옵션이 더 있을 경우 모달이 열게끔 함.
- `<Switch>`에 location을 적용할 때 타입스크립트 에러가 계속 발생함

#### 해결

해결 하지 못함

### 두번째 문제

- 리액트에서 제공하는 `createPortal`을 사용하여 모달을 관리하려고 함.

#### 원인

- [예시](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/portals/)를 참고하여 코드를 작성하였음
- 타입스크립트 타입 관련 에러가 계속 발생함

#### 해결

해결 하지 못함

### 그래서 모달은..

- 이전 프로젝트와 마찬가지로 redux를 이용하여 on/off 함
- 모달은 `App`파일 내 다른 페이지보다 상위에 작성함.

- app 파일

```js
return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <IconContext.Provider value={{ className: 'icons' }}>
      <GlobalStyles />
      <Container>
        <CommentContainer /> 👈 모달
        <Header toggle={themeToggler} />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/book/:id' component={DetailPage} />
          <Route exact path='/record' component={RecordPage} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </Container>
    </IconContext.Provider>
  </ThemeProvider>
);
```

- redux의 모달 액션

```js
export const openModal =
  (isOpen: boolean) => (dispatch: Dispatch<modalDispatchType>) => {
    dispatch({ type: IS_MODAL_OPEN, isOpen });
  };
```
