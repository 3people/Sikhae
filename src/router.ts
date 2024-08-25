import HomePage from './pages/HomePage.svelte'
import MenuPage from './pages/MenuPage.svelte'

export const routes = {
  '/': HomePage,
  '/menu': MenuPage,
  // '/movie/:id': Movie, // 파라미터가 있는 페이지
}
