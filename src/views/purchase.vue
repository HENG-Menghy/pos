<script>
    export default {
        data() {
            return {
                items: [
                    {img: '', type: 'Beauty',   name: 'Liquid Blush',   cost: 20000},
                    {img: '', type: 'Beauty',   name: 'Lip Gloss',      cost: 15000},
                    {img: '', type: 'Beauty',   name: 'Dual Ended Brush', cost: 30000},
                    {img: '', type: 'Beverage', name: 'Coca Cola',      cost: 3000},
                    {img: '', type: 'Beverage', name: 'Heineken',       cost: 8000},
                    {img: '', type: 'Beverage', name: 'Monster Energy', cost: 10000},
                    {img: '', type: 'Food-Meat', name: 'Beed',          cost: 10000},
                    {img: '', type: 'Food-Meat', name: 'Whole Chicken', cost: 15000},
                    {img: '', type: 'Food-Meat', name: 'Pork',          cost: 13000},
                    {img: '', type: 'Snack',    name: 'Pringles',       cost: 10000},
                    {img: '', type: 'Snack',    name: 'Snickers',       cost: 2000},
                    {img: '', type: 'Snack',    name: 'Cheetos',        cost: 4000}
                ]
            }
        }
    }
</script>
<template>
    <div class="w-full">
        <div>
            <main-page/>
        </div>
        <div class="w-4/5 bg-bgColor absolute top-[11%] left-[20%] -z-10">
            <div class="flex-col space-y-6 px-6 py-5">
                <div class="flex items-center gap-3 ml-1">
                    <i>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z" fill="black"/>
                        </svg>                    
                    </i>
                    <i class="rotate-90">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 14L12 9L7 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </i>
                    <span class="mt-1 text-colorBlack">ការបញ្ជាទិញ</span>
                </div>
                <div class="w-full h-full border-2 border-borderColor rounded-xl bg-colorWhite">
                    <div class="p-5 space-y-5">
                        <div class="text-colorBlue text-2xl">
                            ប្រភេទផលិតផល
                        </div>
                        <div class="flex gap-[9px]">
                            <div class="box-items">
                                <span>All Categories</span>
                                <span>12 Items</span>
                            </div>
                            <div class="box-items">
                                <span>Beauty</span>
                                <span>3 Items</span>
                            </div>
                            <div class="box-items">
                                <span>Beverage</span>
                                <span>3 Items</span>
                            </div>
                            <div class="box-items">
                                <span>Food-Meat</span>
                                <span>3 Items</span>
                            </div>
                            <div class="box-items"> 
                                <span>Snack</span>
                                <span>3 Items</span>
                            </div>
                        </div>
                        <div class="text-colorBlue text-2xl">
                            ផលិតផល
                        </div>
                        <div class="w-2/3 flex flex-row flex-wrap gap-6">
                            <div 
                             v-for="item in items" :key="item.name"
                             class="w-[29%] flex flex-col border-[1.8px] border-borderColor rounded-lg p-4"
                            >
                                <div class="bg-bgColor w-full rounded-lg mb-2"> 
                                    <img :src="item.img" class=""> 
                                </div>
                                <span class="text-colorGray text-[14px]">{{item.type}}</span>
                                <span class="text-[14px]">{{item.name}}</span>
                                <span class="text-colorGreen text-xs mt-3">{{item.cost}} ៛</span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute w-1/3 h-max p-6 top-24 right-12 border-2 border-borderColor rounded-xl bg-footerColor">
                        <div class="flex flex-col gap-16">
                            <div class="w-10 h-36 bg-colorRed">

                            </div>
                            <div class="w-10 h-36 bg-colorRed">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .box-items {
        width: 120px;
        height: 65px;
        border: 2.5px solid #CDD5E0;
        border-radius: .6rem;
        display: grid;
        place-items: center;
        padding: .5rem;
        font-size: 14px;
        color: #64748B;
    }
    .box-items:hover {
        border: 2.5px solid #0C7EA5;
        color: #0C7EA5;
        cursor: pointer;
    }
</style>