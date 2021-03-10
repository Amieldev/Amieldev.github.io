function print(value){
	document.write(value);
}
function srch(){
var text=document.getElementById("srch").value;
	if(text=="bio"||text=="Bio"||text=="biology"||text=="Biology"||text=="Bios"||text=="bios"||text=="bio-logy"||text=="Bio-logy"||text=="bio logy"||text=="Bio logy"){
	window.location="bio.html";
}
	if(text=="mitochondria"||text=="Mitochondria"||text=="Mito"||text=="mito"){
	window.location="mito.html";
}
	if(text=="chromosomes"||text=="Chromosomes"||text=="chromosome"||text=="Chromosome"||text=="chromo"||text=="Chromo"){
	window.location="chromo.html";
}
	if(text=="nucleus"||text=="Nucleus"){
	window.location="nucleus.html";
}
	if(text=="endo plasmic reticulum"||text=="Endo plasmic reticulum"||text=="endo-plasmic-reticulum"||text=="Endo-plasmic-reticulum"||text=="endo"||text=="endo plasmic"||text=="endo-plasmic"||text=="Endo"||text=="Endo plasmic"||text=="Endo-plasmic"||text=="endoplasmicreticulum"||text=="Endoplasmicreticulum"||text=="epr"||text=="Epr"){
	window.location="epr.html";
}
	if(text=="largecentralvacuole"||text=="large central vacuole"||text=="Large central vacuole"){
	window.location="lcv.html";
}
	if(text=="cell"||text=="Cell"){
	window.location="cell.html";
}
	if(text=="Micro scope"||text=="Microscope"||text=="microscope"||text=="micro scope"||text=="Micro-scope"||text=="micro-scope"){
	window.location="micro.html";
}
	if(text=="Cell membrane"||text=="cell membrane"||text=="Cellmembrane"||text=="cellmembrane"||text=="Cell-membrane"||text=="cell-membrane"||text=="plasma membrane"||text=="Plasma membrane"||text=="plasmamembrane"||text=="Plasmamembrane"||text=="plasma-membrane"||text=="Plasma-membrane"){
	window.location="cell membrane.html";
}
	if(text=="Cell wall"||text=="cell wall"||text=="Cell-wall"||text=="cell-wall"||text=="cellwall"||text=="Cellwall"||text=="wall"||text=="Wall"){
	window.location="cell wall.html";
}
	if(text=="Lysosome"||text=="lysosome"){
	window.location="lysosome.html";
}
	if(text=="Ribosomes"||text=="Ribosome"||text=="ribosomes"||text=="ribosome"){
	window.location="ribo.html";
}
	if(text=="Cytoplasm"||text=="cytoplasm"||text=="Cyto plasm"||text=="cyto plasm"||text=="Cyto-plasm"||text=="cyto-plasm"){
	window.location="cytoplasm.html";
}
	if(text=="Golgi body"||text=="golgi body"||text=="Golgi-body"||text=="golgi-body"){
	window.location="golgi.html";
}

}
function search(e){
	if(e.keyCode==13){
	srch();
}
}