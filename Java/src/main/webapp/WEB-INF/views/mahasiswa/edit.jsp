<!DOCTYPE web-app PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN" "http://java.sun.com/dtd/web-app_2_3.dtd" >
<%@taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%
	request.setAttribute("contextName",request.getContextPath());
%>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Edit Form Mahasiswa</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 shadow-lg">
	<div class="bg-sky-800">
		<div>
			<div class="flex items-center justify-between">
				<div>
					<p class="px-5 my-2 mx-auto space-y-1 text-white text-2xl font-semibold">SIAKAD</p>
				</div>
			</div>
		</div>
	</div>
	<div>
		<form class="px-8 my-12 mx-auto space-y-1" action="${contextName}/mhs" method="post">
			<div class="text-3xl font-sans font-semibold text-sky-700 my-4">
				<p>Edit Data Mahasiswa</p>
			</div>
			<div>
				<input type="hidden" name="mode" value="edit">
				<input type="hidden" name="id" value="${mahasiswa.id}"> 
				NIM <input class="border border-gray-400 block py-1 px-5 rounded" type="text"
					name="nim" value="${mahasiswa.nim}"><br> 
					Nama <input class="border border-gray-400 block py-1 px-5 rounded" type="text"
					name="nama" value="${mahasiswa.nama}"><br> 
					Alamat <input class="border border-gray-400 block py-1 px-5 rounded" type="text"
					name="alamat" value="${mahasiswa.alamat}"><br>
				<button class="bg-sky-700/80 rounded shadow-lg px-4 py-2 text-white"
					type="submit">Simpan</button>
			</div>

		</form>
	</div>
	<div class="px-20 my-5 mx-auto space-y-1">
		<ol class="list-decimal">
			<c:forEach var="mhs" items="${mhslist}">
				<li>${mhs.nim} - ${mhs.nama}- <a
					class="underline underline-offset-auto text-sky-700"
					href="${contextName}/mhs/edit?id=${mhs.id}">Edit</a> - <a
					class="underline underline-offset-auto text-sky-700"
					href="${contextName}/mhs/delete?id=${mhs.id}">Delete</a></li>
			</c:forEach>
		</ol>
	</div>
</body>
</html>
