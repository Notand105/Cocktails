<script lang="ts">
    let start= ''
    let end = ''
    let date = ''

    function handleStart(e:any){
        start = e.target.value
    }
    function handleEnd(e:any){
        end = e.target.value
    }
    function handleDate(e:any){
        date = e.target.value
    }
    function handleSubmit(e:any){
        e.preventDefault()
        console.log('atention: from ', start, ' to ', end,' at ', date)
    }
</script>

<form on:submit={handleSubmit}  >
    <input  type="time" class="p-2 bg-zinc-900 text-white" on:change={handleStart}  />
    <input  type="time" class="p-2 bg-zinc-900 text-white" on:change={handleEnd}  />
    <input  type="date" class="p-2 bg-zinc-900 text-white" on:change={handleDate}  />
    <button type="submit" class="p-2 bg-slate-200">Registrar</button>
</form>
