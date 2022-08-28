<div class="h-screen container mx-auto flex flex-col justify-center p-5">
  <GradientHeading tag="h1" class="text-5xl">
    <a href="/">
      Svelte tutorial
    </a>
  </GradientHeading>
  <div class="h-3/4 m-16 p-6 border-2 flex flex-col items-center">
    <h2 class="text-center text-2xl m-8">ログイン</h2>
    <form
        class="flex flex-col items-center w-2/4"
        on:submit={handleLogin}
    >
      <label for="email" class="mt-6 w-full">
        <span>メールアドレス</span>
        <input
            type="email"
            id="email"
            minlength="2"
            bind:value={email}
            on:input={(e) => {email = e.target.value}}
            required
        >
      </label>
      <label for="password" class="w-full mt-6">
        <span>パスワード</span>
        <input
            type="password"
            id="password"
            bind:value={password}
            minlength="2"
            autocomplete
            required
        >
      </label>
      <Button
          size="base"
          background="bg-primary-500"
          color="text-white"
          ring="ring-transparent"
          weight="ring-none"
          rounded="rounded-lg"
          width="w-full"
          disabled={false}
          class="mt-12"
      >
        ログイン
      </Button>
    </form>
  </div>
</div>

<script lang="ts">
  import { Button } from '@brainandbones/skeleton';
  import { GradientHeading } from '@brainandbones/skeleton';

  export let email = '';
  export let password = '';

  export const handleLogin = () => {
    console.log(email, password)
  }
</script>
