<script lang="ts">
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import FDropdown from './FDropdown.svelte'
  import {location, pop} from 'svelte-spa-router'
  import {_} from 'svelte-i18n'
  import {clsx} from 'clsx'
  import ChevronLeft from '../assets/icons/ChevronLeft.svelte'
  import {imageStore} from '../store/image'
  import Loading from '../assets/images/loading.gif'

  $: displayDropdown = !['/', '/restaurant'].includes($location)
  $: displayBackButton = !['/home', '/'].includes($location)
  $: headerText = (() => {
    switch ($location) {
      case '/translate-progress':
        return $_('translate.progress.header')
      case '/search':
        return '검색'
      default:
        return ''
    }
  })()

  const onClickBackButton = () => {
    pop()
  }
</script>

<header
  {...$$restProps}
  class={clsx(
    'px-4 flex items-center justify-between max-w-[48rem] w-full z-10 h-12 absolute top-0 bg-white',
    $$restProps.class,
  )}
>
  {#if $imageStore.isLoading}
    <img class="w-[4.5rem]" src={Loading} alt="loading" />
  {:else if displayBackButton}
    <button class="cursor-pointer flex items-center" on:click={onClickBackButton}>
      <ChevronLeft />
      <span class="ml-2 font-bold text-base">{headerText}</span>
    </button>
  {:else}
    <div class="flex gap-0.5 h-full items-center">
      <ForkLogo />
      <span class="font-santokki text-brand-point leading-6">{$_('header.title')}</span>
    </div>
  {/if}
  {#if displayDropdown}
    <FDropdown />
  {/if}
</header>
