import React from "react";
import { VirtualizedList } from "./virtualized_list";

export default {
  component: VirtualizedList,
  title: "virtualized_list",
};

export const ManyItems = () => {
  return (
    <VirtualizedList
      buffer={200}
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div>Hello World!</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus
        arcu bibendum. Eu lobortis elementum nibh tellus. Ante metus dictum at
        tempor commodo ullamcorper a. In massa tempor nec feugiat nisl pretium
        fusce id velit. Mauris a diam maecenas sed enim ut. Sit amet venenatis
        urna cursus eget nunc scelerisque. Sed vulputate mi sit amet mauris
        commodo. Dui id ornare arcu odio ut sem nulla pharetra. Posuere lorem
        ipsum dolor sit amet. Praesent semper feugiat nibh sed pulvinar proin.
        Vulputate eu scelerisque felis imperdiet proin fermentum. Viverra
        accumsan in nisl nisi scelerisque eu ultrices vitae. Habitasse platea
        dictumst vestibulum rhoncus. Eget nunc scelerisque viverra mauris in
        aliquam sem fringilla ut. Pharetra sit amet aliquam id diam maecenas
        ultricies mi. Dictum varius duis at consectetur lorem donec massa sapien
        faucibus. Sed vulputate odio ut enim. Id aliquet lectus proin nibh nisl
        condimentum. Libero volutpat sed cras ornare arcu dui vivamus arcu.
        Viverra orci sagittis eu volutpat. Sit amet purus gravida quis blandit
        turpis cursus in hac. Cursus metus aliquam eleifend mi in. Ultricies
        lacus sed turpis tincidunt id. Pharetra vel turpis nunc eget lorem dolor
        sed viverra. Dui vivamus arcu felis bibendum ut tristique et egestas.
        Massa ultricies mi quis hendrerit dolor magna eget est lorem. Facilisis
        sed odio morbi quis commodo odio aenean. Viverra justo nec ultrices dui
        sapien eget mi proin. A diam sollicitudin tempor id eu nisl nunc mi.
        Viverra orci sagittis eu volutpat odio facilisis. Nulla facilisi morbi
        tempus iaculis urna id volutpat. Dictum varius duis at consectetur lorem
        donec massa. Varius sit amet mattis vulputate enim nulla. Tincidunt
        lobortis feugiat vivamus at. In hac habitasse platea dictumst. Blandit
        volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam
        phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet.
        At urna condimentum mattis pellentesque id. Nisi scelerisque eu ultrices
        vitae auctor eu. Vulputate dignissim suspendisse in est ante. Dignissim
        sodales ut eu sem integer vitae justo eget. Gravida arcu ac tortor
        dignissim convallis aenean. Viverra vitae congue eu consequat ac. Eu sem
        integer vitae justo eget magna. Pellentesque elit ullamcorper dignissim
        cras tincidunt. Curabitur vitae nunc sed velit. Amet aliquam id diam
        maecenas. Iaculis nunc sed augue lacus viverra vitae congue. Praesent
        semper feugiat nibh sed pulvinar. Risus commodo viverra maecenas
        accumsan lacus vel facilisis. Sagittis vitae et leo duis ut diam quam
        nulla. Amet nisl purus in mollis. Viverra nam libero justo laoreet sit
        amet. Pretium nibh ipsum consequat nisl vel pretium. Tempus urna et
        pharetra pharetra massa. Orci porta non pulvinar neque. Nibh cras
        pulvinar mattis nunc sed blandit. Sit amet cursus sit amet dictum.
        Pulvinar elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a lacus vestibulum sed. Vel pretium lectus quam id leo in
        vitae. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.
        Ut tortor pretium viverra suspendisse potenti nullam ac tortor.
        Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Lectus
        arcu bibendum at varius vel pharetra vel. In hac habitasse platea
        dictumst. Nisl tincidunt eget nullam non nisi est. Platea dictumst
        vestibulum rhoncus est pellentesque elit ullamcorper. Dictum non
        consectetur a erat nam. Sodales ut etiam sit amet nisl. Id venenatis a
        condimentum vitae. Porta non pulvinar neque laoreet suspendisse interdum
        consectetur libero id. Quam elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum. Lectus quam id leo in vitae. Sit amet est
        placerat in egestas. Lectus magna fringilla urna porttitor rhoncus dolor
        purus non enim. Pellentesque habitant morbi tristique senectus et netus
        et. Vestibulum lectus mauris ultrices eros in cursus turpis. Pharetra
        massa massa ultricies mi quis. Sed risus pretium quam vulputate
        dignissim. Phasellus faucibus scelerisque eleifend donec. Sem viverra
        aliquet eget sit amet. Nullam eget felis eget nunc lobortis mattis
        aliquam faucibus. Neque aliquam vestibulum morbi blandit cursus risus at
        ultrices mi. Dictumst quisque sagittis purus sit. Ipsum dolor sit amet
        consectetur. Consectetur a erat nam at. Cursus metus aliquam eleifend mi
        in nulla posuere. Consectetur adipiscing elit ut aliquam purus sit. At
        in tellus integer feugiat. Nulla facilisi morbi tempus iaculis urna id
        volutpat lacus. Vitae congue eu consequat ac felis donec. Tellus in
        metus vulputate eu scelerisque felis imperdiet. Convallis tellus id
        interdum velit laoreet id. Facilisis gravida neque convallis a cras
        semper auctor neque. Scelerisque purus semper eget duis at. Tristique
        sollicitudin nibh sit amet commodo nulla facilisi. Pharetra et ultrices
        neque ornare aenean euismod elementum nisi.
      </div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div>
        condimentum. Libero volutpat sed cras ornare arcu dui vivamus arcu.
        Viverra orci sagittis eu volutpat. Sit amet purus gravida quis blandit
        turpis cursus in hac. Cursus metus aliquam eleifend mi in. Ultricies
        lacus sed turpis tincidunt id. Pharetra vel turpis nunc eget lorem dolor
        sed viverra. Dui vivamus arcu felis bibendum ut tristique et egestas.
        Massa ultricies mi quis hendrerit dolor magna eget est lorem. Facilisis
        sed odio morbi quis commodo odio aenean. Viverra justo nec ultrices dui
        sapien eget mi proin. A diam sollicitudin tempor id eu nisl nunc mi.
        Viverra orci sagittis eu volutpat odio facilisis. Nulla facilisi morbi
        tempus iaculis urna id volutpat. Dictum varius duis at consectetur lorem
        donec massa. Varius sit amet mattis vulputate enim nulla. Tincidunt
        lobortis feugiat vivamus at. In hac habitasse platea dictumst. Blandit
        volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam
        phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet.
        At urna condimentum mattis pellentesque id. Nisi scelerisque eu ultrices
        vitae auctor eu. Vulputate dignissim suspendisse in est ante. Dignissim
        sodales ut eu sem integer vitae justo eget. Gravida arcu ac tortor
        dignissim convallis aenean. Viverra vitae congue eu consequat ac. Eu sem
        integer vitae justo eget magna. Pellentesque elit ullamcorper dignissim
        cras tincidunt. Curabitur vitae nunc sed velit. Amet aliquam id diam
        maecenas. Iaculis nunc sed augue lacus viverra vitae congue. Praesent
        semper feugiat nibh sed pulvinar. Risus commodo viverra maecenas
        accumsan lacus vel facilisis. Sagittis vitae et leo duis ut diam quam
        nulla. Amet nisl purus in mollis. Viverra nam libero justo laoreet sit
        amet. Pretium nibh ipsum consequat nisl vel pretium. Tempus urna et
        pharetra pharetra massa. Orci porta non pulvinar neque. Nibh cras
        pulvinar mattis nunc sed blandit. Sit amet cursus sit amet dictum.
        Pulvinar elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a lacus vestibulum sed. Vel pretium lectus quam id leo in
        vitae. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.
        Ut tortor pretium viverra suspendisse potenti nullam ac tortor.
        Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Lectus
        arcu bibendum at varius vel pharetra vel. In hac habitasse platea
        dictumst. Nisl tincidunt eget nullam non nisi est. Platea dictumst
        vestibulum rhoncus est pellentesque elit ullamcorper. Dictum non
        consectetur a erat nam. Sodales ut etiam sit amet nisl. Id venenatis a
        condimentum vitae. Porta non pulvinar neque laoreet suspendisse interdum
        consectetur libero id. Quam elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum. Lectus quam id leo in vitae. Sit amet est
        placerat in egestas. Lectus magna fringilla urna porttitor rhoncus dolor
        purus non enim. Pellentesque habitant morbi tristique senectus et netus
        et. Vestibulum lectus mauris ultrices eros in cursus turpis. Pharetra
        massa massa ultricies mi quis. Sed risus pretium quam vulputate
        dignissim. Phasellus faucibus scelerisque eleifend donec. Sem viverra
        aliquet eget sit amet. Nullam eget felis eget nunc lobortis mattis
        aliquam faucibus. Neque aliquam vestibulum morbi blandit cursus risus at
        ultrices mi. Dictumst quisque sagittis purus sit. Ipsum dolor sit amet
        consectetur. Consectetur a erat nam at. Cursus metus aliquam eleifend mi
        in nulla posuere. Consectetur adipiscing elit ut aliquam purus sit. At
        in tellus integer feugiat. Nulla facilisi morbi tempus iaculis urna id
        volutpat lacus. Vitae congue eu consequat ac felis donec. Tellus in
        metus vulputate eu scelerisque felis imperdiet. Convallis tellus id
        interdum velit laoreet id. Facilisis gravida neque convallis a cras
        semper auctor neque. Scelerisque purus semper eget duis at. Tristique
        sollicitudin nibh sit amet commodo nulla facilisi. Pharetra et ultrices
        neque ornare aenean euismod elementum nisi.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus
        arcu bibendum. Eu lobortis elementum nibh tellus. Ante metus dictum at
        tempor commodo ullamcorper a. In massa tempor nec feugiat nisl pretium
        fusce id velit. Mauris a diam maecenas sed enim ut. Sit amet venenatis
        urna cursus eget nunc scelerisque. Sed vulputate mi sit amet mauris
        commodo. Dui id ornare arcu odio ut sem nulla pharetra. Posuere lorem
        ipsum dolor sit amet. Praesent semper feugiat nibh sed pulvinar proin.
        Vulputate eu scelerisque felis imperdiet proin fermentum. Viverra
        accumsan in nisl nisi scelerisque eu ultrices vitae. Habitasse platea
        dictumst vestibulum rhoncus. Eget nunc scelerisque viverra mauris in
        aliquam sem fringilla ut. Pharetra sit amet aliquam id diam maecenas
        ultricies mi. Dictum varius duis at consectetur lorem donec massa sapien
        faucibus. Sed vulputate odio ut enim. Id aliquet lectus proin nibh nisl
        condimentum. Libero volutpat sed cras ornare arcu dui vivamus arcu.
        Viverra orci sagittis eu volutpat. Sit amet purus gravida quis blandit
        turpis cursus in hac. Cursus metus aliquam eleifend mi in. Ultricies
        lacus sed turpis tincidunt id. Pharetra vel turpis nunc eget lorem dolor
        sed viverra. Dui vivamus arcu felis bibendum ut tristique et egestas.
        Massa ultricies mi quis hendrerit dolor magna eget est lorem. Facilisis
        sed odio morbi quis commodo odio aenean. Viverra justo nec ultrices dui
        sapien eget mi proin. A diam sollicitudin tempor id eu nisl nunc mi.
        Viverra orci sagittis eu volutpat odio facilisis. Nulla facilisi morbi
        tempus iaculis urna id volutpat. Dictum varius duis at consectetur lorem
        donec massa. Varius sit amet mattis vulputate enim nulla. Tincidunt
        lobortis feugiat vivamus at. In hac habitasse platea dictumst. Blandit
        volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam
        phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet.
        At urna condimentum mattis pellentesque id. Nisi scelerisque eu ultrices
        vitae auctor eu. Vulputate dignissim suspendisse in est ante. Dignissim
        sodales ut eu sem integer vitae justo eget. Gravida arcu ac tortor
        dignissim convallis aenean. Viverra vitae congue eu consequat ac. Eu sem
        integer vitae justo eget magna. Pellentesque elit ullamcorper dignissim
        cras tincidunt. Curabitur vitae nunc sed velit. Amet aliquam id diam
        maecenas. Iaculis nunc sed augue lacus viverra vitae congue. Praesent
        semper feugiat nibh sed pulvinar. Risus commodo viverra maecenas
        accumsan lacus vel facilisis. Sagittis vitae et leo duis ut diam quam
        nulla. Amet nisl purus in mollis. Viverra nam libero justo laoreet sit
        amet. Pretium nibh ipsum consequat nisl vel pretium. Tempus urna et
        pharetra pharetra massa. Orci porta non pulvinar neque. Nibh cras
        pulvinar mattis nunc sed blandit. Sit amet cursus sit amet dictum.
        Pulvinar elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a lacus vestibulum sed. Vel pretium lectus quam id leo in
        vitae. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.
        Ut tortor pretium viver
      </div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
    </VirtualizedList>
  );
};

export const HeaderAndFooterItems = () => {
  return (
    <VirtualizedList
      buffer={200}
      header={
        <div
          style={{
            backgroundColor: "white",
            height: "60px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          }}
        >
          Header
        </div>
      }
      footer={
        <div
          style={{
            backgroundColor: "white",
            height: "60px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          }}
        >
          Footer
        </div>
      }
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div>Hello World!</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
      <div style={{ height: "147px", backgroundColor: "orange" }}>2</div>
      <div style={{ height: "447px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "447px", backgroundColor: "green" }}>3</div>
      <div style={{ height: "638px", backgroundColor: "teal" }}>3</div>
      <div style={{ height: "387px", backgroundColor: "black" }}>3</div>
      <div style={{ height: "47px", backgroundColor: "grey" }}>3</div>
      <div style={{ height: "462px", backgroundColor: "red" }}>3</div>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>3</div>
      <div style={{ height: "225px", backgroundColor: "pink" }}>3</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
    </VirtualizedList>
  );
};

export const FewItems = () => {
  return (
    <VirtualizedList
      buffer={200}
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div>Hello World!</div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
    </VirtualizedList>
  );
};

export const FewItemsWithHeaderAndFooter = () => {
  return (
    <VirtualizedList
      buffer={200}
      header={
        <div
          style={{
            backgroundColor: "white",
            height: "60px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          }}
        >
          Header
        </div>
      }
      footer={
        <div
          style={{
            backgroundColor: "white",
            height: "100px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
          }}
        >
          Footer
        </div>
      }
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus
        arcu bibendum. Eu lobortis elementum nibh tellus. Ante metus dictum at
        tempor commodo ullamcorper a. In massa tempor nec feugiat nisl pretium
        fusce id velit. Mauris a diam maecenas sed enim ut. Sit amet venenatis
        urna cursus eget nunc scelerisque. Sed vulputate mi sit amet mauris
        commodo. Dui id ornare arcu odio ut sem nulla pharetra. Posuere lorem
        ipsum dolor sit amet. Praesent semper feugiat nibh sed pulvinar proin.
        Vulputate eu scelerisque felis imperdiet proin fermentum. Viverra
        accumsan in nisl nisi scelerisque eu ultrices vitae. Habitasse platea
        dictumst vestibulum rhoncus. Eget nunc scelerisque viverra mauris in
        aliquam sem fringilla ut. Pharetra sit amet aliquam id diam maecenas
        ultricies mi. Dictum varius duis at consectetur lorem donec massa sapien
        faucibus. Sed vulputate odio ut enim. Id aliquet lectus proin nibh nisl
        condimentum. Libero volutpat sed cras ornare arcu dui vivamus arcu.
        Viverra orci sagittis eu volutpat. Sit amet purus gravida quis blandit
        turpis cursus in hac. Cursus metus aliquam eleifend mi in. Ultricies
        lacus sed turpis tincidunt id. Pharetra vel turpis nunc eget lorem dolor
        sed viverra. Dui vivamus arcu felis bibendum ut tristique et egestas.
        Massa ultricies mi quis hendrerit dolor magna eget est lorem. Facilisis
        sed odio morbi quis commodo odio aenean. Viverra justo nec ultrices dui
        sapien eget mi proin. A diam sollicitudin tempor id eu nisl nunc mi.
        Viverra orci sagittis eu volutpat odio facilisis. Nulla facilisi morbi
        tempus iaculis urna id volutpat. Dictum varius duis at consectetur lorem
        donec massa. Varius sit amet mattis vulputate enim nulla. Tincidunt
        lobortis feugiat vivamus at. In hac habitasse platea dictumst. Blandit
        volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam
        phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet.
        At urna condimentum mattis pellentesque id. Nisi scelerisque eu ultrices
        vitae auctor eu. Vulputate dignissim suspendisse in est ante. Dignissim
        sodales ut eu sem integer vitae justo eget. Gravida arcu ac tortor
        dignissim convallis aenean. Viverra vitae congue eu consequat ac. Eu sem
        integer vitae justo eget magna. Pellentesque elit ullamcorper dignissim
        cras tincidunt. Curabitur vitae nunc sed velit. Amet aliquam id diam
        maecenas. Iaculis nunc sed augue lacus viverra vitae congue. Praesent
        semper feugiat nibh sed pulvinar. Risus commodo viverra maecenas
        accumsan lacus vel facilisis. Sagittis vitae et leo duis ut diam quam
        nulla. Amet nisl purus in mollis. Viverra nam libero justo laoreet sit
        amet. Pretium nibh ipsum consequat nisl vel pretium. Tempus urna et
        pharetra pharetra massa. Orci porta non pulvinar neque. Nibh cras
        pulvinar mattis nunc sed blandit. Sit amet cursus sit amet dictum.
        Pulvinar elementum integer enim neque volutpat. At tempor commodo
        ullamcorper a lacus vestibulum sed. Vel pretium lectus quam id leo in
        vitae. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.
        Ut tortor pretium viverra suspendisse potenti nullam ac tortor.
        Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Lectus
        arcu bibendum at varius vel pharetra vel. In hac habitasse platea
        dictumst. Nisl tincidunt eget nullam non nisi est. Platea dictumst
        vestibulum rhoncus est pellentesque elit ullamcorper. Dictum non
        consectetur a erat nam. Sodales ut etiam sit amet nisl. Id venenatis a
        condimentum vitae. Porta non pulvinar neque laoreet suspendisse interdum
        consectetur libero id. Quam elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum. Lectus quam id leo in vitae. Sit amet est
        placerat in egestas. Lectus magna fringilla urna porttitor rhoncus dolor
        purus non enim. Pellentesque habitant morbi tristique senectus et netus
        et. Vestibulum lectus mauris ultrices eros in cursus turpis. Pharetra
        massa massa ultricies mi quis. Sed risus pretium quam vulputate
        dignissim. Phasellus faucibus scelerisque eleifend donec. Sem viverra
        aliquet eget sit amet. Nullam eget felis eget nunc lobortis mattis
        aliquam faucibus. Neque aliquam vestibulum morbi blandit cursus risus at
        ultrices mi. Dictumst quisque sagittis purus sit. Ipsum dolor sit amet
        consectetur. Consectetur a erat nam at. Cursus metus aliquam eleifend mi
        in nulla posuere. Consectetur adipiscing elit ut aliquam purus sit. At
        in tellus integer feugiat. Nulla facilisi morbi tempus iaculis urna id
        volutpat lacus. Vitae congue eu consequat ac felis donec. Tellus in
        metus vulputate eu scelerisque felis imperdiet. Convallis tellus id
        interdum velit laoreet id. Facilisis gravida neque convallis a cras
        semper auctor neque. Scelerisque purus semper eget duis at. Tristique
        sollicitudin nibh sit amet commodo nulla facilisi. Pharetra et ultrices
        neque ornare aenean euismod elementum nisi.
      </div>
      <div style={{ height: "30px", backgroundColor: "red" }}>0</div>
      <div style={{ height: "62px", backgroundColor: "blue" }}>1</div>
    </VirtualizedList>
  );
};
