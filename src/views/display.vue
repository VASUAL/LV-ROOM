<template>
	<div>
		<el-container>
		  <el-header>扬州大学弱电间管理系统</el-header>
		  <el-main>
			  <el-row class="tac">
			    <el-col :span="24">
					 <el-menu :default-openeds="['1', '3']">
							      <el-submenu index="1">
							        <template slot="title"><i class="el-icon-s-order"></i>扬子津校区</template>
							        <el-menu-item-group>
							          <el-submenu index="1-1">
							            <template slot="title">一号楼</template>
							            <el-menu-item index="1-1-1">
											<el-button @click="table2101 = true" type="text">
											  2101
											</el-button>
										</el-menu-item>
										<el-menu-item index="1-1-2">2102</el-menu-item>
							          </el-submenu>
							        </el-menu-item-group>
							        <el-menu-item-group>
							          <el-submenu index="1-2">
							            <template slot="title">二号楼</template>
							            <el-menu-item index="1-2-1">2201</el-menu-item>
							          	<el-menu-item index="1-2-2">2205</el-menu-item>
							          </el-submenu>
							        </el-menu-item-group>
							        <el-menu-item-group>
							         <el-submenu index="1-3">
							           <template slot="title">三号楼</template>
							           <el-menu-item index="1-3-1">3102</el-menu-item>
							           <el-menu-item index="1-3-2">2102</el-menu-item>
									   <el-menu-item index="1-3-3">2107</el-menu-item>
							         </el-submenu>
							        </el-menu-item-group>
							        </el-submenu>
							      </el-submenu>
								  
							     <el-submenu index="2">
							       <template slot="title"><i class="el-icon-s-order"></i>荷花池校区</template>
							       <el-menu-item-group>
							         <el-submenu index="2-1">
							           <template slot="title">一号楼</template>
							           <el-menu-item index="2-1-1">2103</el-menu-item>
							     	   <el-menu-item index="1-1-2">2202</el-menu-item>
							         </el-submenu>
							       </el-menu-item-group>
							       <el-menu-item-group>
							         <el-submenu index="2-2">
							           <template slot="title">二号楼</template>
							           <el-menu-item index="2-2-1">2201</el-menu-item>
							         	<el-menu-item index="2-2-2">2205</el-menu-item>
							         </el-submenu>
							       </el-menu-item-group>
							       <el-menu-item-group>
							        <el-submenu index="2-3">
							          <template slot="title">三号楼</template>
							          <el-menu-item index="2-3-1">3104</el-menu-item>
							          <el-menu-item index="2-3-2">3102</el-menu-item>
							     	  <el-menu-item index="2-3-3">2107</el-menu-item>
							        </el-submenu>
							       </el-menu-item-group>
							       </el-submenu>
							     </el-submenu>
								 
							    <el-submenu index="3">
							        <template slot="title"><i class="el-icon-s-order"></i>文汇路校区</template>
							        <el-menu-item-group>
							          <el-submenu index="3-1">
							            <template slot="title">一号楼</template>
							            <el-menu-item index="3-1-1">2101</el-menu-item>
							      		<el-menu-item index="3-1-2">2102</el-menu-item>
							          </el-submenu>
							        </el-menu-item-group>
							        <el-menu-item-group>
							          <el-submenu index="3-2">
							            <template slot="title">二号楼</template>
							            <el-menu-item index="3-2-1">2201</el-menu-item>
							          	<el-menu-item index="3-2-2">2205</el-menu-item>
							          </el-submenu>
							        </el-menu-item-group>
							        <el-menu-item-group>
							         <el-submenu index="3-3">
							           <template slot="title">三号楼</template>
							           <el-menu-item index="3-3-1">3102</el-menu-item>
							           <el-menu-item index="3-3-2">2102</el-menu-item>
							      	   <el-menu-item index="3-3-3">2107</el-menu-item>
							         </el-submenu>
							        </el-menu-item-group>
							        </el-submenu>
							    </el-submenu>
								
								<el-submenu index="4">
								    <template slot="title"><i class="el-icon-s-order"></i>瘦西湖校区</template>
								    <el-menu-item-group>
								      <el-submenu index="4-1">
								        <template slot="title">一号楼</template>
								        <el-menu-item index="4-1-1">4101</el-menu-item>
								  		<el-menu-item index="4-1-2">2102</el-menu-item>
								      </el-submenu>
								    </el-menu-item-group>
								    <el-menu-item-group>
								      <el-submenu index="4-2">
								        <template slot="title">二号楼</template>
								        <el-menu-item index="4-2-1">2201</el-menu-item>
								      	<el-menu-item index="4-2-2">2205</el-menu-item>
								      </el-submenu>
								    </el-menu-item-group>
								    <el-menu-item-group>
								     <el-submenu index="4-3">
								       <template slot="title">三号楼</template>
								       <el-menu-item index="4-3-1">3102</el-menu-item>
								       <el-menu-item index="4-3-2">2102</el-menu-item>
								  	   <el-menu-item index="4-3-3">2107</el-menu-item>
								     </el-submenu>
								    </el-menu-item-group>
								    </el-submenu>
								</el-submenu>
								
								<el-submenu index="5">
								    <template slot="title"><i class="el-icon-s-order"></i>江阳路南校区</template>
								    <el-menu-item-group>
								      <el-submenu index="5-1">
								        <template slot="title">一号楼</template>
								        <el-menu-item index="5-1-1">2101</el-menu-item>
								  		<el-menu-item index="5-1-2">3102</el-menu-item>
								      </el-submenu>
								    </el-menu-item-group>
								    <el-menu-item-group>
								      <el-submenu index="5-2">
								        <template slot="title">二号楼</template>
								        <el-menu-item index="5-2-1">2201</el-menu-item>
								      	<el-menu-item index="5-2-2">2205</el-menu-item>
								      </el-submenu>
								    </el-menu-item-group>
								    <el-menu-item-group>
								     <el-submenu index="5-3">
								       <template slot="title">三号楼</template>
								       <el-menu-item index="5-3-1">3102</el-menu-item>
								       <el-menu-item index="5-3-2">2102</el-menu-item>
								  	   <el-menu-item index="5-3-3">2107</el-menu-item>
								     </el-submenu>
								    </el-menu-item-group>
								    </el-submenu>
								</el-submenu>
								
								<el-submenu index="6">
								    <template slot="title"><i class="el-icon-s-order"></i>江阳路北校区</template>
								    <el-menu-item-group>
								      <el-submenu index="6-1">
								        <template slot="title">一号楼</template>
								        <el-menu-item index="6-1-1">2101</el-menu-item>
								  		<el-menu-item index="6-1-2">3102</el-menu-item>
								      </el-submenu>
								    </el-menu-item-group>
								    <el-menu-item-group>
								      <el-submenu index="6-2">
								        <template slot="title">二号楼</template>
								        <el-menu-item index="6-2-1">2201</el-menu-item>
								      	<el-menu-item index="6-2-2">2205</el-menu-item>
								      </el-submenu>
								    </el-menu-item-group>
								    <el-menu-item-group>
								     <el-submenu index="6-3">
								       <template slot="title">三号楼</template>
								       <el-menu-item index="6-3-1">3102</el-menu-item>
								       <el-menu-item index="6-3-2">2102</el-menu-item>
								  	   <el-menu-item index="6-3-3">2107</el-menu-item>
								     </el-submenu>
								    </el-menu-item-group>
								    </el-submenu>
								</el-submenu>
								
							    </el-menu>
			    </el-col>
			  </el-row>
		  </el-main>
		  <el-footer>
			  <el-row :gutter="10" align="bottom">
			    <el-col :span="8"><div>
				<el-button @click="addRecords">添加记录</el-button>
				</div></el-col>
			    <el-col :span="8"><div>
				<el-button >拍摄照片</el-button>
				</div></el-col>
			    <el-col :span="8"><div>
				<el-button @click="loginOut">退出登录</el-button>
				</div></el-col>
			  </el-row>
		  </el-footer>
		</el-container>
		<el-drawer
		  title="近期巡查记录"
		  :visible.sync="table2101"
		  direction="ltr"
		  size="80%">
		   <el-table
		       :data="tableData"
		       style="width: 100%">
		       <el-table-column type="expand">
		         <template slot-scope="props">
		           <el-form label-position="left" inline class="demo-table-expand">
		             <el-form-item label="时间">
		               <span>{{ props.row.time }}</span>
		             </el-form-item>
		             <el-form-item label="巡查人">
		               <span>{{ props.row.people }}</span>
		             </el-form-item>
		             <el-form-item label="总体状况">
		               <span>{{ props.row.situation }}</span>
		             </el-form-item>
		             <el-form-item label="通风扇状况">
		               <span>{{ props.row.situation1 }}</span>
		             </el-form-item>
		             <el-form-item label="线缆状况">
		               <span>{{ props.row.situation2 }}</span>
		             </el-form-item>
		             <el-form-item label="设备状况">
		               <span>{{ props.row.situation3 }}</span>
		             </el-form-item>
		             <el-form-item label="备注">
		               <span>{{ props.row.desc }}</span>
		             </el-form-item>
		           </el-form>
		         </template>
		       </el-table-column>
		       <el-table-column
		         label="时间"
		         prop="time">
		       </el-table-column>
		       <el-table-column
		         label="巡查人"
		         prop="people">
		       </el-table-column>
		       <el-table-column
		         label="总体状况"
		         prop="situation">
		       </el-table-column>
		     </el-table>
		</el-drawer>
	</div>
</template>

<script>
	export default {
		 data() {
		    return {
		      table2101: false,
		      dialog: false,
		      loading: false,
		 tableData: [{
		          time: '2021-12-12',
		          people: '王五',
		          situation: 'A',
		          situation1: 'A',
		          situation2: 'A',
		          situation3: 'A',
		          desc: '无',
		        }, {
		          time: '2021-12-13',
		          people: '张三',
		          situation: 'A',
		          situation1: 'B',
		          situation2: 'A',
		          situation3: 'A',
		          desc: '通风扇有声音',
		        }, {
		          time: '2021-12-14',
		          people: '李四',
		          situation: 'A',
		          situation1: 'A',
		          situation2: 'A',
		          situation3: 'A',
		          desc: '无',
		        }, {
		          time: '2021-12-15',
		          people: '赵六',
		          situation: 'A',
		          situation1: 'A',
		          situation2: 'C',
		          situation3: 'A',
		          desc: '线缆断裂',
		        }]
		  }
		  },
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
		  addRecords(key, keyPath) {
		    this.$router.push("/addrecords")
		  },
		  loginOut(key, keyPath) {
		    this.$router.push("/")
		  }
		  }
	  }
</script>

<style>
	.demo-table-expand {
	    font-size: 0;
	  }
	  .demo-table-expand label {
	    width: 90px;
	    color: #99a9bf;
	  }
	  .demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 50%;
	  }
	.el-header{
		background-color: #B3C0D1;
		color: #333;
		text-align: left;
		line-height: 60px;
	}
	 .el-footer {
		background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	  
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    line-height: 200px;
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	    line-height: 160px;
		min-height: calc(100vh - 140px);
	  }
	  
	   .el-row {
	      margin-bottom: 20px;
	      &:last-child {
	        margin-bottom: 0;
	      }
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
	    .row-bg {
	      padding: 10px 0;
	      background-color: #f9fafc;
	    }
		
	  
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	  
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	  
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
</style>