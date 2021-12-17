<template>
	<div>
	<el-main>
	  <el-table :data="tableData">
	    <el-table-column prop="date" label="日期" width="100">
	    </el-table-column>
	    <el-table-column prop="name" label="姓名" width="60">
	    </el-table-column>
		<el-table-column prop="situation" label="状况" width="50">
		</el-table-column>
		<el-table-column prop="path" label="图片" width="100">
			 <template slot-scope="scope">
			              <el-image
			                style="width: 50px; height: 50px"
			                :src="scope.row.path"
			                :preview-src-list="scope.row.list" 
			                >
			              </el-image>
			</template>
		</el-table-column>
	    <el-table-column prop="address" label="位置" width="100">
	    </el-table-column>
		<el-table-column prop="function" label="操作" width="50">
		</el-table-column>
	  </el-table>
	</el-main>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
			tableData: [
				{
				  date: '2021-12-11',
				  name: 'admin',
				  situation:'A',
				  address: '扬子津校区一号楼2101'
				},
				{
				  date: '2021-12-11',
				  name: 'admin',
						situation:'B',
				  address: '扬子津校区一号楼2102'
				},
				{
				  date: '2021-12-11',
				  name: '张三',
						situation:'A',
				  address: '扬子津校区二号楼2201'
				},
				{
				  date: '2021-12-11',
				  name: '李四',
						situation:'C',
				  address: '扬子津校区三号楼3102'
				},
				 {
				  date: '2021-12-11',
				  name: 'admin',
						situation:'A',
				  address: '文汇路校区三号楼2107'
				}
			]
	    }
	  }
	};
</script>

<style>
	.el-header {
	  background-color: #B3C0D1;
	  color: #333;
	  line-height: 60px;
	}
	
	.el-aside {
	  color: #333;
	}
	.el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
</style>
