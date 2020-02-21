<form action="{{ route('admin.login.submit') }}" method="POST">
    @csrf
    <input type="email" name="email">
    <input type="password" name="password">
    <input type="submit" >
</form>