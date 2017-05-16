<template>
	<div id="login">
		<h2>登入</h2>
			<form>
				<div class="form-group">
					<input type = "email" placeholder = "Email address">
				</div>
				<div class="form-group">
					<input type = "password"  placeholder = "Password">
				</div>
				<button type="submit" class = "btn"> 登入 </button >
			</form>
	</div>
</template>

<script>
export default {
  created () {
    console.log('login')
  }
}
</script>
