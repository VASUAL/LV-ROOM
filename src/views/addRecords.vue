<template>
	<el-container>
	  <el-header>扬州大学弱电间管理系统</el-header>
	  <el-main>
		  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		  	  <el-form-item label="巡查人姓名" prop="name">
		  	    <el-input v-model="ruleForm.name"></el-input>
		  	  </el-form-item>
		  	  <el-form-item label="巡查人电话" prop="phone">
		  	    <el-input v-model="ruleForm.phone"></el-input>
		  	  </el-form-item>
		  	  <el-form-item label="活动区域" prop="region">
		  		<el-col :span="8">
		  	    <el-select v-model="ruleForm.region1" placeholder="请选择活动区域">
		  	      <el-option label="扬子津校区" value="YangZijin"></el-option>
		  	      <el-option label="荷花池校区" value="HeHuachi"></el-option>
		  		  <el-option label="文汇路校区" value="WenHuilu"></el-option>
		  		  <el-option label="瘦西湖校区" value="ShouXihu"></el-option>
		  		  <el-option label="江阳路南校区" value="JiangYanglunan"></el-option>
		  		  <el-option label="江洋路北校区" value="JiangYanglubei"></el-option>
		  	    </el-select>
		  		</el-col>
		  		<el-col :span="8">
		  		<el-select v-model="ruleForm.region2" placeholder="请选择活动区域">
		  		  <el-option label="一号楼" value="N1"></el-option>
		  		  <el-option label="二号楼" value="N2"></el-option>
		  		  <el-option label="三号楼" value="N3"></el-option>
		  		</el-select>
		  		</el-col>
		  		<el-col :span="8">
		  		<el-select v-model="ruleForm.region3" placeholder="请选择活动区域">
		  		  <el-option label="2101" value="2101"></el-option>
		  		  <el-option label="2102" value="2102"></el-option>
		  		  <el-option label="2201" value="2205"></el-option>
		  		  <el-option label="3102" value="3102"></el-option>
		  		  <el-option label="2102" value="2102"></el-option>
		  		  <el-option label="2107" value="2107"></el-option>
		  		</el-select>
		  		</el-col>
		  	  </el-form-item>
		  	  <el-form-item label="巡查时间" required>
		  	    <el-col :span="11">
		  	      <el-form-item prop="date1">
		  	        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
		  	      </el-form-item>
		  	    </el-col>
		  	    <el-col class="line" :span="2">-</el-col>
		  	    <el-col :span="11">
		  	      <el-form-item prop="date2">
		  	        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
		  	      </el-form-item>
		  	    </el-col>
		  	  </el-form-item>
		  	  <el-form-item label="总体状况" prop="type1">
				<el-radio-group v-model="ruleForm.type1">
				  <el-radio label="A"></el-radio>
				  <el-radio label="B"></el-radio>
				  <el-radio label="C"></el-radio>
				  <el-radio label="D"></el-radio>
				</el-radio-group>
		  	  </el-form-item>
			  <el-form-item label="通风扇状况" prop="type2">
			  	<el-radio-group v-model="ruleForm.type2">
			  	    <el-radio label="A"></el-radio>
			  	    <el-radio label="B"></el-radio>
			  		<el-radio label="C"></el-radio>
			  		<el-radio label="D"></el-radio>
			 </el-radio-group>
			  </el-form-item>
			 <el-form-item label="线缆状况" prop="type3">
			 	<el-radio-group v-model="ruleForm.type3">
			 	<el-radio label="A"></el-radio>
			 	<el-radio label="B"></el-radio>
			 	<el-radio label="C"></el-radio>
			 	<el-radio label="D"></el-radio>
			</el-radio-group>
			 </el-form-item>
			 <el-form-item label="设备状况" prop="type4">
			 	<el-radio-group v-model="ruleForm.type4">
			 	<el-radio label="A"></el-radio>
			 	<el-radio label="B"></el-radio>
			 	<el-radio label="C"></el-radio>
			 	<el-radio label="D"></el-radio>
			  </el-radio-group>
			 </el-form-item>
		  	  <el-form-item label="详情备注" prop="desc">
		  	    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
		  	  </el-form-item>
		  	  <el-form-item label="上传照片">
				  <el-upload
				    class="upload-demo"
				    action="https://jsonplaceholder.typicode.com/posts/"
				    :on-preview="handlePreview"
				    :on-remove="handleRemove"
				    :file-list="fileList"
				    list-type="picture">
				    <el-button size="small">
						<i class="el-icon-plus"></i>
					</el-button>
					</el-upload>
		  	  </el-form-item>
		  	  <el-form-item>
		  		  <el-button  @click="submitForm('ruleForm')">
		  			  提交
		  		  </el-button>
				  <el-button @click="resetForm('ruleForm')">重置</el-button>
		  	  </el-form-item>
		  	</el-form>
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
</template>

<script>
	export default {
	    data() {
	      return {
	        ruleForm: {
	          name: '',
			  phone:'',
	          region1: '',
			  region2: '',
			  region3: '',
	          date1: '',
	          date2: '',
	          type1: [],
			  type2: [],
			  type3: [],
			  type4: [],
	          desc: ''
	        },
	        rules: {
	          name: [
	            { required: true, message: '请输入姓名', trigger: 'blur' },
	            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
	          ],
			  phone: [
			    { required: true, message: '请输入电话号码', trigger: 'blur' },
			    { min: 11, max: 11, message: '请输入11位电话号码', trigger: 'blur' }
			  ],
	          region1: [
	            { required: true, message: '请选择巡查区域', trigger: 'change' }
	          ],
			  region2: [
			    { required: true, message: '请选择巡查区域', trigger: 'change' }
			  ],
			  region3: [
			    { required: true, message: '请选择巡查区域', trigger: 'change' }
			  ],
	          date1: [
	            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
	          ],
	          date2: [
	            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
	          ],
	          type1: [
	            {  required: true, message: '请选择总体状况', trigger: 'change' }
	          ],
			  type2: [
			    {  required: true, message: '请选择通风扇状况', trigger: 'change' }
			  ],
			  type3: [
			    { required: true, message: '请选择线缆状况', trigger: 'change' }
			  ],
			  type4: [
			    { required: true, message: '请选择设备状况', trigger: 'change' }
			  ],
	          desc: [
	            { required: false, message: '请填写备注', trigger: 'blur' }
	          ]
	        },
			 fileList: [{name: '1.png', url: ''}]
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('创建成功');
	          } else {
	            console.log('创建失败');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      },
		  handleRemove(file, fileList) {
		    console.log(file, fileList);
		  },
		  handlePreview(file) {
		    console.log(file);
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
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
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
