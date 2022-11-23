@extends('layouts.main')

<div class = "row justify-content-center">
    <div class = "col-md-5">
        <main class = "form-regist">
        <h1 class = "h3 mb-3 fw-normal text-center">Login</h1>
            <form>
            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>

            </form>
            <small class="d-block text-center">Not registered?<a href="/register">
            Register now</a></small>
        </main>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2021–2022</p>
</div>